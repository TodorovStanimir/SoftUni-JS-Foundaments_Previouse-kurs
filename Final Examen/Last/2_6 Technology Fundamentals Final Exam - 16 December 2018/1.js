function annapurna(input) {
    let list = {};
    for (let line of input) {
        line = line.split('->');
        let command = line.shift();

        if (command === 'END') {
            break;
        }

        if (command === 'Add') {
            add(line);
        } else if (command === 'Remove') {
            remove(line);
        }
    }

    let sortedDiary = Object.entries(list)
        .sort((a, b) => {
            b[1].length - a[1].length || b[0].localeCompare(a[0]);
        });

    console.log(`Stores list:`);
    for (const [key, value] of sortedDiary) {
        console.log(`${key}`);

        for (let i = 0; i < value.length; i++) {
            console.log(`<<${value[i]}>>`)

        }
    }


    function add(line) {
        let [store, items] = line;
        items = items.split(',');

        if (!list.hasOwnProperty(store)) {
            list[store] = [];

            for (const item of items) {
                list[store].push(item);
            }
        } else {
            for (const item of items) {
                list[store].push(item);
            }
        }

    };

    function remove(line) {
        let [store] = line;

        if (list.hasOwnProperty(store)) {
            delete list[store]
        }
    }
}
annapurna(
    ['Add->PeakSports->Map,Navigation,Compass',
        'Add->Paragon->Sunscreen',
        'Add->Groceries->Dried-fruit,Nuts',
        'Add->Groceries->Nuts',
        'Add->Paragon->Tent',
        'Remove->Paragon',
        'Add->Pharmacy->Pain-killers',
        'END'])