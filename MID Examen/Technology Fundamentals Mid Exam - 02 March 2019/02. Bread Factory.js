function breadFactory(input) {
    let currentEnergy = 100;
    let coins = 100;
    let workingDayEvents = input[0].split('|');
    let dayCompleted = true;
    let ingredient = '';

    for (let event of workingDayEvents) {
        let [eventOrIngredient, number] = event.split('-');

        if (eventOrIngredient === 'rest') {
            let energy = Number(number);
            let gainedEnergy = 0;
            if (currentEnergy + energy >= 100) {
                gainedEnergy = 100 - currentEnergy;
            } else {
                gainedEnergy=energy;
            }
            currentEnergy += gainedEnergy;
            console.log(`You gained ${gainedEnergy} energy.`);
            console.log(`Current energy: ${currentEnergy}.`);
        } else if (eventOrIngredient === 'order') {
            let orderedCoins = Number(number);
            if (currentEnergy >= 30) {
                currentEnergy -= 30;
                coins += orderedCoins;
                console.log(`You earned ${orderedCoins} coins.`);
            } else {
                currentEnergy += 50;
                console.log('You had to rest!');
            }
        } else {
            ingredient = eventOrIngredient;
            let priceIngredient = Number(number);
            if (coins - priceIngredient > 0) {
                coins -= priceIngredient;
                console.log(`You bought ${ingredient}.`);
            } else {
                dayCompleted = false;
                break;
            }
        }
    }

    if (dayCompleted) {
        console.log('Day completed!');
        console.log(`Coins: ${coins}`);
        console.log(`Energy: ${currentEnergy}`);
    } else {
        console.log(`Closed! Cannot afford ${ingredient}.`);

    }
}
breadFactory(['rest-2|order-10|eggs-100|rest-10']);
breadFactory(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000']);