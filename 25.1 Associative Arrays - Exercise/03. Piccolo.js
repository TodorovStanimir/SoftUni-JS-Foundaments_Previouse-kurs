function piccolo(input) {
    let parckingLot = new Map();

    for (let currentCar of input) {
        let [state, number] = currentCar.split(', ');

        if (parckingLot.has(number)) {
            if (state === 'OUT') {
                parckingLot.delete(number);
            }
        } else {
            if (state === 'IN') {
                parckingLot.set(number, state);
            }
        }
    }
    let sorted = Array.from(parckingLot.keys()).sort((a, b) => a.localeCompare(b))

    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let number of sorted) {
            console.log(number);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])