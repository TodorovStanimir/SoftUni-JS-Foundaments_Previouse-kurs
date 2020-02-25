function softuniCoffeeOrders(input) {
    let countOrders = parseInt(input.shift());
    let totalPrice = 0;
    for (let i = 0; i < countOrders * 3; i += 3) {
        let orderPrice = 0
        let price = parseFloat(input[i]);
        let capsulsCount = parseInt(input[i + 2]);
        let data = input[i + 1];
        data = data.match(/[\d]{1,4}/g).map(Number);

        let month = data[1]
        let year = data[2];
        let days = new Date(year, month, 0).getDate();


        orderPrice = (days * capsulsCount) * price;

        console.log(`The price for the coffee is: $${orderPrice.toFixed(2)}`);
        totalPrice += orderPrice;

    }
    console.log(`Total: $${totalPrice.toFixed(2)}`);
}
softuniCoffeeOrders(['1',
    '1.53',
    '06/06/2016',
    '8'
]);
softuniCoffeeOrders([2,
    4.99,
    '6/07/2016',
    3,
    0.35,
    '03/01/2013',
    5
])