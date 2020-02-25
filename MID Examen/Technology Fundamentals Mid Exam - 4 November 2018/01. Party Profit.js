function partyProfit(input) {
    let companions = parseInt(input.shift());
    let daysParty = parseInt(input.shift());
    let coins = 0;

    for (let day = 1; day <= daysParty; day++) {
        coins += 50;
        if (day % 10 === 0) {
            companions -= 2;
        }
        if (day % 15 === 0) {
            companions += 5;
        }
        coins -= 2 * companions;
        if (day % 3 === 0) {
            coins -= 3 * companions;
        }
        if (day % 5 === 0) {
            coins += 20 * companions;
        }
        if (day % 3 === 0 && day % 5 === 0) {
            coins -= 2 * companions;
        }
    }
    console.log(`${companions} companions received ${Math.floor( coins/companions)} coins each.`);

}
partyProfit([3, 5]);
partyProfit([15, 30]);