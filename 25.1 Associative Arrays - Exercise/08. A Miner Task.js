function minerTask(input) {
    let output = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let mineral = input[i];
        let quantity = Number(input[i + 1]);

        if (output.has(mineral)) {
            let currentQuantity = output.get(mineral);
            let newQuantity = currentQuantity + quantity;
            output.set(mineral, newQuantity);
        } else {
            output.set(mineral, quantity);
        }
    }
    for (let item of output){
        console.log(`${item[0]} -> ${item[1]}`)
    }
}
minerTask(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15',
])