easterShopping = (input) => {
    let listOfShops = input.shift().split(' ');
    let countCommands = parseInt(input.shift());
    for (let i = 1; i <= countCommands; i++) {
        let inputLine = input.shift().split(' ');
        let command = inputLine.shift();

        if (command === 'Include') {
            let shop = inputLine.shift();
            listOfShops.push(shop);
        } else if (command === 'Visit') {
            let firstOrLast = inputLine.shift();
            let numberOfShops = Number(inputLine.shift());

            if (listOfShops.length >= numberOfShops) {
                if (firstOrLast === 'first') {
                    listOfShops.splice(0, numberOfShops);
                } else if (firstOrLast === 'last') {
                    listOfShops.splice(listOfShops.length - numberOfShops, numberOfShops);
                }
            }
        } else if (command === 'Prefer') {
            let shopIndex1 = Number(inputLine.shift());
            let shopIndex2 = Number(inputLine.shift());

            if (shopIndex1 >= 0 && shopIndex1 < listOfShops.length &&
                shopIndex2 >= 0 && shopIndex2 < listOfShops.length) {
                let firstShop = listOfShops[shopIndex1];
                listOfShops[shopIndex1] = listOfShops[shopIndex2];
                listOfShops[shopIndex2] = firstShop;
            }
        } else if (command === 'Place') {
            let shop = inputLine.shift();
            let shopIndex = Number(inputLine.shift()) + 1;
            if (shopIndex >= 0 && shopIndex <= listOfShops.length) {
                listOfShops.splice(shopIndex, 0, shop);
            }
        }
    }
    console.log(`Shops left:\n${listOfShops.join(' ')}`); 
}
easterShopping(["Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore",
    5,
    "Include HM",
    "Visit first 2",
    "Visit last 1",
    "Prefer 3 1",
    "Place Library 2"
]);

easterShopping(["Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore",
    6,
    "Visit first 9",
    "Visit last 4",
    "Prefer 3 8",
    "Prefer 0 1",
    "Place Store 7",
    "Place ShoeAquarium 2"
])