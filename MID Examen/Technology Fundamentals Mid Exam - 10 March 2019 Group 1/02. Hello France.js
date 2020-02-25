function helloFrance(input) {
    let collectionOfItems = input[0].split('|');
    let budget = Number(input[1]);
    let totalProfit = 0;
    let pricesOfBoughtStocks = [];
    collectionOfItems.forEach(element => {
        let [stock, price] = element.split('->');
        price = Number(price);
        if (((stock === 'Clothes' && price >= 0 && price <= 50) ||
                (stock === 'Shoes' && price >= 0 && price <= 35) ||
                (stock === 'Accessories' && price >= 0 && price <= 20.50)) && budget - price >= 0) {
            budget -= price;
            totalProfit += 0.4 * price;
            pricesOfBoughtStocks.push(1.4 * price);
        }
    });
    let newBudget = pricesOfBoughtStocks.reduce((acumulator, currenValue) => acumulator + currenValue, budget);

    pricesOfBoughtStocks = pricesOfBoughtStocks.map(price => price.toFixed(2));

    console.log(pricesOfBoughtStocks.join(' '));
    console.log(`Profit: ${(totalProfit).toFixed(2)}`);
    console.log((newBudget) >= 150 ? 'Hello, France!' : 'Time to go.');

}
helloFrance(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60', '120']);
helloFrance(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60', '90']);