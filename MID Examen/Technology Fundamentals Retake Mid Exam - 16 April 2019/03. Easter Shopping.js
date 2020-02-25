easterShopping = (input) => {
    let listOfShops = input.shift().split(' ');
    let countOfCommands = Number(input.shift());
    for (let counter = 1; counter <= countOfCommands; counter++) {
        let commandLine = input.shift().split(' ');
        if (commandLine[0] === ('Include')) {
            listOfShops.push(commandLine[1]);
        } else if (commandLine[0] === ('Visit')) {
            let numberVisitedShops = Number(commandLine[2]);
            if (commandLine[1] === 'first' && listOfShops.length >= numberVisitedShops) {
                listOfShops.splice(0, numberVisitedShops);
            } else if (commandLine[1] === 'last' && listOfShops.length >= numberVisitedShops) {
                listOfShops.splice(listOfShops.length - numberVisitedShops, numberVisitedShops);
            }
        } else if (commandLine[0] === ('Prefer')) {
            let shopIndex1 = Number(commandLine[1]);
            let shopIndex2 = Number(commandLine[2]);
            if ((0 <= shopIndex1 && shopIndex1 < listOfShops.length) &&
                (0 <= shopIndex2 && shopIndex2 < listOfShops.length)) {
                let shop1 = listOfShops[shopIndex1];
                let shop2 = listOfShops[shopIndex2];
                listOfShops[shopIndex1] = shop2;
                listOfShops[shopIndex2] = shop1;
            }

        } else if (commandLine[0] === 'Place') {
            let shop = commandLine[1];
            let shopIndex = Number(commandLine[2]);
            if (0 <= shopIndex + 1 && shopIndex + 1 < listOfShops.length) {
                listOfShops.splice(shopIndex + 1, 0, shop);
            }
        }
    }
    console.log(`Shops left:\n${listOfShops.join(' ')}`);
}
// easterShopping(["Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore",
//     5,
//     "Include HM",
//     "Visit first 2",
//     "Visit last 1",
//     "Prefer 3 1",
//     "Place Library 2"
// ]);

easterShopping(["Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore",
    6,
    "Visit first 9",
    "Visit last 4",
    "Prefer 3 8",
    "Prefer 0 1",
    "Place Store 7",
    "Place ShoeAquarium 2"
    ])