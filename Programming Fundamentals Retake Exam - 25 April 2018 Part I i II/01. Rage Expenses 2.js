function rageExpenses(inp) {
    let lostGames = parseInt(inp[0]);
    let headsetPrice = parseFloat(inp[1]);
    let mousePrice = parseFloat(inp[2]);
    let keybordPrice = parseFloat(inp[3]);
    let displayPrice = parseFloat(inp[4]);
    let expenses = parseInt(lostGames / 2) * headsetPrice + parseInt(lostGames / 3) * mousePrice + parseInt(lostGames / 6) * keybordPrice + parseInt(lostGames / 12) * displayPrice;

    console.log(`Rage expenses: ${expenses.toFixed(2)} lv.`);
}
rageExpenses([7, 2, 3, 4, 5]);
rageExpenses([23, 12.50, 21.50, 40, 200]);