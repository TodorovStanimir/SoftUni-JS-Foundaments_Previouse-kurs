trophonTheGrumpyCat = (input) => {
    let priceRatings = input.shift().split(' ').map(Number);
    let entryPoints = Number(input.shift());
    let typeItems = input.shift();
    let typePrice = input.shift();
    let priceOfEntryPosition = priceRatings[entryPoints];

    let leftSum = calculatePrice(priceRatings.slice(0, entryPoints), priceOfEntryPosition);
    let rightSum = calculatePrice(priceRatings.slice(entryPoints + 1), priceOfEntryPosition);

    console.log(leftSum >= rightSum ? `Left - ${leftSum}` : `Right - ${rightSum}`)

    function calculatePrice(arr, price) {
        let result = arr
            .filter(el => {
                return ((typeItems === 'cheap' && el < price) || (typeItems === 'expensive' && el >= price))
                    ? true
                    : false
            }).filter(el => {
                return (typePrice === 'all' || (typePrice === 'positive' && el > 0)
                    || typePrice === 'negative' && el < 0)
                    ? true
                    : false
            }).reduce((a, b) => a + b, 0);
        return result;
    }
}
trophonTheGrumpyCat(['1 5 1', '1', 'cheap', 'all', ''])
trophonTheGrumpyCat(['-2 2 1 5 9 3 2 -2 1 -1 -3 3', '7', 'expensive', 'positive', ''])