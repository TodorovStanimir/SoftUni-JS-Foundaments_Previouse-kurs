function christmasspirit(input) {
    let quantity = parseInt(input[0]);
    let days = parseInt(input[1]);

    let totalCost = 0;
    let totalSpirit = 0;
    let priceOrnamentSet = 2;
    let priceTreeSkirt = 5;
    let priceTreeGarlands = 3;
    let priceTreeLight = 15;

    for (let i = 1; i <= days; i++) {
        if (i % 11 === 0) {
            quantity += 2;
        }
        if (i % 2 === 0) {
            totalCost += quantity * priceOrnamentSet;
            totalSpirit += 5;
        }
        if (i % 3 === 0) {
            totalCost += quantity * (priceTreeSkirt + priceTreeGarlands);
            totalSpirit += 13;
        }
        if (i % 5 === 0) {
            totalCost += quantity * priceTreeLight;
            totalSpirit += 17;
        }
        if (i % 3 === 0 && i % 5 === 0) {
            totalSpirit += 30;
        }
        if (i % 10 === 0) {
            totalSpirit -= 20;
            totalCost += 1 * (priceTreeSkirt + priceTreeGarlands + priceTreeLight);
        }
    }
    if (days % 10===0) {
        totalSpirit -= 30;
    }
    console.log(`Total cost: ${totalCost}`);
    console.log(`Total spirit: ${totalSpirit}`);
}
christmasspirit([1, 7]);
christmasspirit([3, 20]);