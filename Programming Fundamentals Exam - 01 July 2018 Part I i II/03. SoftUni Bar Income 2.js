function softuniBarIncome(input) {
    let pattern = /%(?<name>[A-Z]{1}[a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.\d]*(?<price>[0-9.]+)\$/g;
    let totalIncome = 0;
    while ((line = input.shift()) !== 'end of shift') {
        if (line.match(pattern)) {
            let currentSelling = pattern.exec(line);
            console.log(`${currentSelling.groups.name}: ${currentSelling.groups.product} - ${(currentSelling.groups.count * currentSelling.groups.price).toFixed(2)}`)
            totalIncome += currentSelling.groups.count * currentSelling.groups.price;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])