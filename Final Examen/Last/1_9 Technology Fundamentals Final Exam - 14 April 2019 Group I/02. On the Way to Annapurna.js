function onTheWayToAnnapurna(input) {
    let stores = {};
    while ((line = input.shift()) !== 'END') {
        let [command, store, itemOrItems] = line.split('->');
        if (command === 'Add') {
            if (!stores[store]) {
                stores[store] = [...itemOrItems.split(',')]
            } else {
                stores[store].push(...itemOrItems.split(','))
            }
        } else if (command === 'Remove') {
            if (stores[store]) {
                delete stores[store];
            }
        }
    }
    console.log('Stores list:')
    Object.entries(stores)
        .sort((a, b) => b[1].length - a[1].length || b[0].localeCompare(a[0]))
        .forEach(store => {
            console.log(`${store[0]}`);
            store[1].forEach(item => console.log(`<<${item}>>`));
        });
}
onTheWayToAnnapurna(['Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent,Tent',
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