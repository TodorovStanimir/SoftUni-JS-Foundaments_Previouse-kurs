sweetDessert = (input) => {
    let cash = parseFloat(input[0]);
    let numberQuests = parseInt(input[1]);
    let bananasPrice = parseFloat(input[2]);
    let eggsPrice = parseFloat(input[3]);
    let berriesPrice = parseFloat(input[4]);

    let quantityPortions = Math.ceil(numberQuests / 6);
    let priceOnePortions = 2 * bananasPrice + 4 * eggsPrice + 0.20 * berriesPrice;
    let totalPrice = priceOnePortions * quantityPortions;

    if (totalPrice <= cash) {
        console.log(`Ivancho has enough money - it would cost ${totalPrice.toFixed(2)}lv.`);
    } else {
console.log(`Ivancho will have to withdraw money - he will need ${(totalPrice-cash).toFixed(2)}lv more.`);
    }
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