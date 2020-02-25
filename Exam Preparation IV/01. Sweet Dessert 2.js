sweetDessert = (input) => {
    let cash = parseFloat(input.shift());
    let countGuests = parseInt(input.shift());
    let bananasPrice = parseFloat(input.shift());
    let eggsPrice = parseFloat(input.shift());
    let berriesPrice = parseFloat(input.shift());

    let price = Math.ceil(countGuests / 6) * (2 * bananasPrice + 4 * eggsPrice + 0.2 * berriesPrice);

    console.log((price <= cash)
        ? `Ivancho has enough money - it would cost ${price.toFixed(2)}lv.`
        : `Ivancho will have to withdraw money - he will need ${(price - cash).toFixed(2)}lv more.`)
}
sweetDessert([10,
    12,
    0.35,
    0.20,
    4.50
])
sweetDessert([20,
    33,
    0.6,
    0.5,
    10
])