function softuniBarIncome(input) {
    let totalIncome = 0;
    while ((line = input.shift()) !== 'end of shift') {
        let  correctLine = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[\d]{1,})\|[^|$%.0123456789]*(?<price>[0-9]+[.]*[0-9]{0,})\$/g.exec(line);
        if (correctLine) {
            let amount = Number(correctLine.groups['count'])*Number(correctLine.groups['price']);
            totalIncome += amount
            console.log(`${correctLine.groups['name']}: ${correctLine.groups['product']} - ${amount.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Maria%<Cola>|1|2.4$',
    '%Peter%<Gum>|1|1.3$',
    'end of shift']);
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])