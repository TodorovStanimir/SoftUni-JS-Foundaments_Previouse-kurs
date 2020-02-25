function bitcoinMining(arg) {
    let days = arg.length;
    let currentGold = 0;
    let currentLevs = 0;
    let totalLevs = 0;
    let isBouthFirstBitcoin = false;
    let currentBitcoins = 0;
    let totalBitcoins = 0;
    let dayOfBuyingFirstBitcoin = 0;

    for (let i = 1; i <= days; i++) {
        currentGold = Number(arg[i - 1]);
        if (i % 3 == 0) {
            currentGold -= 30 / 100 * currentGold;
        }
        currentLevs = currentGold * 67.51;
        totalLevs += currentLevs;
        if (totalLevs >= 11949.16) {
            currentBitcoins = Math.floor(totalLevs / 11949.16);
            totalBitcoins += currentBitcoins;
            totalLevs -= currentBitcoins * 11949.16;
            if (!isBouthFirstBitcoin) {
                dayOfBuyingFirstBitcoin = i;
                isBouthFirstBitcoin = true;
            }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBuyingFirstBitcoin}`);
    }
    console.log(`Left money: ${totalLevs.toFixed(2)} lv.`);
}
bitcoinMining([50,100])