trophonTheGrumpyCat = (input) => {
    let priceRatings = input[0].split(' ').map(Number);
    let entryPoint = Number(input[1]);
    let typeOfItems = input[2];
    let typeOfPriceRating = input[3];

    let entryAmount = priceRatings[entryPoint];
    let leftDamageHousehold = checkDamages(priceRatings.slice(0, entryPoint), entryAmount);
    let rightDamageHousehold = checkDamages(priceRatings.slice(entryPoint + 1), entryAmount);

    (leftDamageHousehold >= rightDamageHousehold)
        ? console.log(`Left - ${leftDamageHousehold}`)
        : console.log(`Right - ${rightDamageHousehold}`)

    function checkDamages(arr, entryAmount) {
        let damage = arr
            .filter(element => {
                if ((typeOfItems === 'cheap' && element < entryAmount)
                    || (typeOfItems === 'expensive' && element >= entryAmount)) {
                    return true;
                } else {
                    return false;
                }
            })
            .filter(element => {
                if (typeOfPriceRating === 'all'
                    || (typeOfPriceRating === 'positive' && element > 0)
                    || typeOfPriceRating === 'negative' && element < 0) {
                    return true;
                } else {
                    return false;
                }
            }).reduce((a, b) => a + b, 0)
        return damage;
    }
}
trophonTheGrumpyCat(['1 5 1', '1', 'cheap', 'all', ''])
trophonTheGrumpyCat(['-2 2 1 5 9 3 2 -2 1 -1 -3 3', '7', 'expensive', 'positive', ''])