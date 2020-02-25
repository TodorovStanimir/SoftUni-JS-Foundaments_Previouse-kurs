function catalogue(input) {
    let output = input.sort((a, b) => a.localeCompare(b));
    let currentOutput = '';

    let firstAlphabetic = output[0].slice(0, 1);
    console.log(firstAlphabetic);

    for (let i = 0; i < output.length; i++) {
        if (firstAlphabetic === output[i].slice(0, 1)) {
            currentOutput = output[i].split(' : ').join(': ');
            console.log(`  ${currentOutput}`);
        } else {
            firstAlphabetic = output[i].slice(0, 1);
            console.log(firstAlphabetic);
            currentOutput = output[i].split(' : ').join(': ');
            console.log(`  ${currentOutput}`);
        }
    }
}
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti - Bug Spray : 15', 'T - Shirt : 10'])

function catalogue(input) {
    let result = input.sort((a, b) => a.localeCompare(b));
    let currentProduct = [];
    let previousekey = '';
    let output = {};
    for (let i = 0; i < result.length; i++) {
        let key = result[i].slice(0, 1);
        output[key] = [];
        if (previousekey !== key && i !== 0) {
            output[previousekey].splice(0, 1, currentProduct);
            currentProduct = [];
            currentProduct.push(result[i]);
        } else {
            currentProduct.push(result[i]);
        }
        if (i === result.length - 1) {
            output[key] = [];
            output[key].push(currentProduct);
        }
        previousekey = key;
    }

    for (let key in output) {
        console.log(key)
        for (let i = 0; i < output[key][0].length; i++) {
            let [product, quantity] = output[key][0][i].split(' : ')
            console.log(`  ${product}: ${quantity}`);
        }
    }
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti - Bug Spray : 15',
    'T - Shirt : 10'
]);