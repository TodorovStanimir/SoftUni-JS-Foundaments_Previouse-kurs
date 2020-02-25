function helloFrance(input) {
    let collectionOfItems = [];
    let sellingPrices = [];
    let profit = 0;
    let budget = Number(input[1]);

    input[0]
        .split('|')
        .forEach(item => collectionOfItems.push([item.split('->')[0], Number(item.split('->')[1])]))

    collectionOfItems.filter(element => {
        let kindStock = element[0];
        let price = element[1];
        if ((kindStock === 'Clothes' && price >= 0 && price <= 50) ||
            (kindStock === 'Shoes' && price >= 0 && price <= 35) ||
            (kindStock === 'Accessories' && price >= 0 && price <= 20.50)) {
            if (budget >= price) {
                let sellingPrice = 1.40 * price;
                sellingPrices.push(sellingPrice.toFixed(2));
                profit += 0.40 * price;
                budget -= price;
            }
        }
    });
    let incomes = sellingPrices.reduce((a, b) => a + b);
    console.log(sellingPrices.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    console.log((incomes + budget) >= 150 ? 'Hello, France!' : 'Time to go.');
}
helloFrance(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60', '120']);
helloFrance(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60', '90'])