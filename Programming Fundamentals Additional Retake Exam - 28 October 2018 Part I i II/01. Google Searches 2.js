function googleSearch(input) {
    let days = parseInt(input.shift());
    let numberUsers = parseInt(input.shift());
    let moneyForSingleSearches = parseFloat(input.shift());

    let totalMoney = 0;

    for (let numberUser = 1; numberUser <= numberUsers; numberUser++) {
        let numberWords = parseInt(input.shift());
        let moneyForCurrentUser = 0
        if (numberWords <= 5) {
            if (numberWords === 1) {
                moneyForCurrentUser = moneyForSingleSearches * 2;
            } else {
                moneyForCurrentUser = moneyForSingleSearches
            }
            if (numberUser % 3 === 0) {
                moneyForCurrentUser *= 3;
            }
        }
        totalMoney += moneyForCurrentUser*days;
    }
    console.log(`Total money earned for ${days} days: ${totalMoney.toFixed(2)}`);
}
googleSearch([5, 2, 5.5, 6, 1]);
googleSearch([10, 3, 6, 5, 4, 1]);