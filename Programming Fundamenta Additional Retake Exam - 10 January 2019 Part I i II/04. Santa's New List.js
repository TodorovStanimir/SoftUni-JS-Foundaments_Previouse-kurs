function santasNewList(input) {
    let sheetChilden = new Map();
    let sheetPresents = new Map();
    let line = input.shift();

    while (line !== 'END') {
        let [children, toys, price] = line.split('->');
        let priceChildren = Number(price);
        let pricePresent = Number(price);
        if (children !== 'Remove') {
            if (!sheetChilden.has(children)) {
                sheetChilden.set(children, priceChildren);
            } else {
                priceChildren += sheetChilden.get(children)
                sheetChilden.set(children, priceChildren);
            }
            if (!sheetPresents.has(toys)) {
                sheetPresents.set(toys, pricePresent);
            } else {
                pricePresent += sheetPresents.get(toys);
                sheetPresents.set(toys, pricePresent);
            }
        } else if (children === 'Remove') {
            sheetChilden.delete(toys)
        }
        line = input.shift();
    }
    let outputChildren = [...sheetChilden.entries()];
    let outputPresents = [...sheetPresents.entries()];
    outputChildren.sort((a, b) => {
        if (a[1] > b[1] || a[1] < b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    if (outputChildren.length > 0) {
        console.log('Children:');
        outputChildren.forEach(children => {
            console.log(`${children[0]} -> ${children[1]}`);
        });
    }

    if (outputPresents.length > 0) {
        console.log('Presents:');
        outputPresents.forEach(present => {
            console.log(`${present[0]} -> ${present[1]}`);
        });
    }
}
santasNewList(['Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'
]);
santasNewList(['Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
]);