function breadFactory(input) {
    let energy = 100;
    let coins = 100;
    let eventDays = [];
    let dayComplete = true;
    input.shift().split('|').forEach(element => {
        let [event, number] = element.split('-');
        eventDays.push([event, Number(number)]);
    });

    for (let event of eventDays) {
        if (event[0] === 'rest') {
            let gainedEnergy = Math.min(100 - energy, event[1]);
            energy += gainedEnergy;
            console.log(`You gained ${gainedEnergy} energy.`);
            console.log(`Current energy: ${energy}.`);
        } else if (event[0] === 'order') {
            if (energy - 30 >= 0) {
                energy -= 30;
                coins += event[1];
                console.log(`You earned ${event[1]} coins.`);
            } else {
                energy += 50;
                console.log('You had to rest!');

            }
        } else {
            let ingredient = event[0]
            if (coins - event[1] > 0) {
                coins -= event[1];
                console.log(`You bought ${ingredient}.`);

            } else {
                dayComplete = false;
                console.log(`Closed! Cannot afford ${ingredient}.`);
                break;
            }
        }
    }

    if (dayComplete) {
        console.log(`Day completed!\nCoins: ${coins}\nEnergy: ${energy}`);
    }
}
breadFactory(['rest-2|order-10|eggs-100|rest-10']);
breadFactory(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000']);