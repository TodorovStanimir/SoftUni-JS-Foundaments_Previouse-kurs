function onTheWayToAnnapurna(input) {
    let result = {};
    while ((line = input.shift()) !== 'END') {
        let [command, store, items] = line.split('->');

        if (command === 'Add') {
            if (!(store in result)) {
                result[store] = [];
            }
            result[store].push(...items.split(','));
        } else if (command === 'Remove') {
            delete result[store];
        }
    }
    console.log('Stores list:');
    Object.entries(result)
    .sort((a,b) => b[0].localeCompare(a[0]))
    .sort((a,b) => b[1].length - a[1].length)
    .forEach(store => {
        console.log(`${store[0]}`);
        store[1].forEach(item => console.log(`<<${item}>>`))
    });
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
onTheWayToAnnapurna(['Add->Peak->Waterproof,Umbrella',
    'Add->Groceries->Water,Juice,Food',
    'Add->Peak->Tent',
    'Add->Peak->Sleeping-Bag',
    'Add->Peak->Jacket',
    'Add->Groceries->Lighter',
    'Remove->Groceries',
    'Remove->Store',
    'END'
])