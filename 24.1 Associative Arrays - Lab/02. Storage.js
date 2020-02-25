function storage(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let [product, quantity] = input[i].split(' ');

        if (!result.has(product)) {
            result.set(product, Number(quantity));
        } else {
            let totalQuantity=Number(quantity)+result.get(product);
            result.set(product, totalQuantity);
        }
    }
    for (let [product, quantity] of result){
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);