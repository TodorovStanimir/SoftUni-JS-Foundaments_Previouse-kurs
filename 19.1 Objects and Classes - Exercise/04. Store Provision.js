function storeProvision(input) {
    let currentStock = input[0];
    let orderdStock = input[1];

    let output = {};

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            output[currentStock[i]] = Number(currentStock[i + 1]);
        }
    }

    for (let i = 0; i < orderdStock.length; i++) {
        if (i % 2 === 0) {
            if (output.hasOwnProperty(orderdStock[i])) {
                let key = orderdStock[i];
                let value = Number(orderdStock[i + 1]);
                output[key] += value;
            } else {
                output[orderdStock[i]] = Number(orderdStock[i + 1]);
            }
        }
    }
    let result= Object.entries(output);
    // console.log(result);
    
    for (let [product, quantity] of result) {
        console.log(`${product} -> ${quantity}`);
    }
}
storeProvision([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
]);