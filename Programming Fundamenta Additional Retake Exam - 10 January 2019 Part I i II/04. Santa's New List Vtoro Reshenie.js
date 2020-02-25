function santasNewList(input) {
    let childrens = {};
    let presents = {};

    while ((line = input.shift()) !== 'END') {
        let [name, present, price] = line.split('->');
        if (name !== 'Remove') {
            price = Number(price);
            (!childrens[name])
                ? childrens[name] = price
                : childrens[name] += price
            addPresent(present, price);
        } else {
            name = present;
            if (childrens[name]) {
                delete childrens[name];
            }
        }
    }

    console.log('Children:')
    Object.entries(childrens).sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    }).forEach(children => {
        console.log(`${children[0]} -> ${children[1]}`)
    });

    console.log('Presents:')
    Object.entries(presents).forEach(present => {
        console.log(`${present[0]} -> ${present[1]}`)
    });

    function addPresent(namePresent, pricePresent) {
        !presents[namePresent] ? presents[namePresent] = pricePresent : presents[namePresent] += pricePresent
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