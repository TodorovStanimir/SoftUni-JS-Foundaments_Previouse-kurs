easterCozonacs = (input) => {
    let budget = parseFloat(input[0]);
    let priceFlour = parseFloat(input[1]);

    let priceeggs = 0.75 * priceFlour;
    let priceMilk = 1.25 * priceFlour;
    let priceOneCozonac = priceeggs + priceFlour + 0.25 * priceMilk;
    let coloredEggs = 0;
    let makenCozonacs = 0;
    while (budget >= priceOneCozonac) {
        makenCozonacs++;
        budget -= priceOneCozonac;
        coloredEggs += 3;
        if (makenCozonacs % 3 === 0) {
            coloredEggs -= (makenCozonacs - 2)
        }
    }
    console.log(`You made ${makenCozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}
easterCozonacs(['20.50', '1.25'])
easterCozonacs(['15.75', '1.4'])