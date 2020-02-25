function googleSearch(input) {
    let totalDays = parseInt(input.shift());
    let numberOfUsers = parseInt(input.shift());
    let moneyPerSingleSearch = parseFloat(input.shift());
    let moneyEarned = 0;


    for (let user = 1; user <= numberOfUsers; user++) {
        let numberWords = parseInt(input.shift());
        let moneyForThisUser = 0;
        if (numberWords <= 5) {
            if (numberWords === 1) {
                moneyForThisUser = 2 * moneyPerSingleSearch;
            } else {
                moneyForThisUser = moneyPerSingleSearch;
            }
            if (user % 3 === 0) {
                moneyForThisUser = 3 * moneyForThisUser;
            }
        }
        moneyEarned += moneyForThisUser * totalDays
    }
    console.log(`Total money earned for ${totalDays} days: ${moneyEarned.toFixed(2)}`);
}
googleSearch([5, 2, 5.5, 6, 1]);
googleSearch([10, 3, 6, 5, 4, 1]);