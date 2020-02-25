hornetWings = (input) => {
    let wingFlaps = parseInt(input[0]);
    let distanceForThousandwings = parseFloat(input[1]);
    let wingsBeforeBreak = parseInt(input[2]);

    let distance = wingFlaps/1000*distanceForThousandwings;
    let time = parseInt(wingFlaps/wingsBeforeBreak)*5+parseInt(wingFlaps/100)

    console.log(`${distance.toFixed(2)} m.`);
    console.log(`${time} s.`);
}
hornetWings(['2000', '5', '200', ''])
hornetWings(['1000000', '10', '1500', ''])