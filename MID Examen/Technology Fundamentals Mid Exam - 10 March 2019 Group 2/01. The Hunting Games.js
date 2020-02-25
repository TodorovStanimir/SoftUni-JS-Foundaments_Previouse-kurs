theHuntingGames = (input) => {
    let daysOfAdventures = parseInt(input.shift());
    let countOfThePlayers = parseInt(input.shift());
    let groupEnergy = parseFloat(input.shift());
    let waterForADayPerPerson = parseFloat(input.shift());
    let foodForADayPerPerson = parseFloat(input.shift());
    let totalWater = daysOfAdventures * countOfThePlayers * waterForADayPerPerson;
    let totalFood = daysOfAdventures * countOfThePlayers * foodForADayPerPerson;
    let theyHaveEnoughtEnergy = true;

    for (let day = 1; day <= daysOfAdventures; day++) {
        let energyLoss = parseFloat(input.shift());
        if (groupEnergy - energyLoss > 0) {
            groupEnergy -= energyLoss;
            if (day % 2 === 0) {
                groupEnergy += 0.05 * groupEnergy;
                totalWater -= 0.3 * totalWater;
            }
            if (day % 3 === 0) {
                groupEnergy += 0.10 * groupEnergy;
                totalFood -= (totalFood / countOfThePlayers);
            }
        } else {
            theyHaveEnoughtEnergy = false;
            break;
        }
    }
    console.log(theyHaveEnoughtEnergy ? `You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!` :
        `You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
}
theHuntingGames(['10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
    '630.3',
    '784.20',
    '321.21',
    '456.8',
    '330',
    ''
]);
theHuntingGames(['12',
    '6',
    '4430',
    '9.8',
    '5.5',
    '620.3',
    '840.2',
    '960.1',
    '220',
    '340',
    '674',
    '365',
    '345.5',
    '212',
    '412.12',
    '258',
    '496',
    ''
]);