function onTheWayToAnnapurna(input) {
    let output = {};
    let curCommand = input.shift();

    function print(result) {
        console.log('Stores list:');
        result.forEach(element => {
            console.log(element[0]);
            element[1].forEach(element1 => {
                console.log(`<<${element1}>>`);

            });
        });
    }

    function sorting(output) {
        output.sort((a, b) => {
            if (a[1].length > b[1].length) {
                return -1;
            } else if (a[1].length < b[1].length) {
                return 1;
            } else {
                if (a[0] > b[0]) {
                    return -1;
                } else if (a[0] < b[0]) {
                    return 1
                }
            }
        });
    }

    while (curCommand !== 'END') {
        let [command, store, items] = curCommand.split('->');
        if (command === 'Add') {
            if (!Object.keys(output).includes(store)) {
                output[store] = []
            }
            items.split(',').forEach(element => {
                output[store].push(element);
            });
        } else if (command === 'Remove') {
            if (Object.keys(output).includes(store)) {
                delete(output[store]);
            }
        }
        curCommand = input.shift();
    }
    output = Object.entries(output);
    sorting(output);
    print(output);
}
onTheWayToAnnapurna(['Add->AeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]);
// onTheWayToAnnapurna(['Add->Peak->Waterproof,Umbrella',
//     'Add->Groceries->Water,Juice,Food',
//     'Add->Peak->Tent',
//     'Add->Peak->Sleeping-Bag',
//     'Add->Peak->Jacket',
//     'Add->Groceries->Lighter',
//     'Remove->Groceries',
//     'Remove->Store',
//     'END'
// ])