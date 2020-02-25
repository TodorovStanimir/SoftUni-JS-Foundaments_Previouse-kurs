function rageExpenses(input) {
    let lostGames = parseInt(input.shift());
    let headsetPrice = parseFloat(input.shift());
    let mousePrice = parseFloat(input.shift());
    let keyboardPrice = parseFloat(input.shift());
    let displayPrice = parseFloat(input.shift());
    let counterTrashesKeybord = 0;
    let expenses = 0;

    for (let lostedGame = 1; lostedGame <= lostGames; lostedGame++) {
        if (lostedGame % 2 === 0) {
            expenses += headsetPrice;
        }
        if (lostedGame % 3 === 0) {
            expenses += mousePrice;
        }
        if (lostedGame % 2 === 0 && lostedGame % 3 === 0) {
            counterTrashesKeybord++;
            expenses += keyboardPrice;
        }
        if (counterTrashesKeybord === 2) {
            counterTrashesKeybord = 0;
            expenses += displayPrice;
        }
    }
    console.log(`Rage expenses: ${expenses.toFixed(2)} lv.`);
}
rageExpenses([7, 2, 3, 4, 5]);
rageExpenses([23, 12.50, 21.50, 40, 200]);