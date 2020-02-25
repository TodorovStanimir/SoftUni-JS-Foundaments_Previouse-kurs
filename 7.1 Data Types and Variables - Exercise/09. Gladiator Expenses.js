function GladiatorExpenses(arg1, arg2, arg3, arg4, arg5) {
    let lostFightsCount = parseInt(arg1);
    let helmetPrice = parseFloat(arg2);
    let swordPrice = parseFloat(arg3);
    let shieldPrice = parseFloat(arg4);
    let armorPrice = parseFloat(arg5);
    let price = 0;
    isHelmetBroken = false;
    isSwordBroken = false;
    let i = 0;

    for (let game = 1; game <= lostFightsCount; game++) {
        if (game % 2 == 0) {
            price += helmetPrice;
            isHelmetBroken = true;
        }
        if (game % 3 == 0) {
            price += swordPrice;
            isSwordBroken = true;
        }
        if (isHelmetBroken && isSwordBroken) {
            i++;
            price += shieldPrice;
            if (i == 2) {
                price += armorPrice;
                i = 0;
            }
        }
        isHelmetBroken = false;
        isSwordBroken = false;
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
GladiatorExpenses(7, 2, 3, 4, 5)
GladiatorExpenses(23, 12.50, 21.50, 40, 200)