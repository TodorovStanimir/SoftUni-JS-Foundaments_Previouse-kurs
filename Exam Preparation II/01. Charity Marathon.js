charityMarathon = (input) => {
    let lengthMarathon = parseInt(input[0]);
    let numberOfRunners = parseInt(input[1]);
    let averageNumbersOfLap = parseInt(input[2]);
    let lengthOfTrack = parseInt(input[3]);
    let capacityOfTrack = parseInt(input[4]);
    let donetedMoneyPerKilometer = parseFloat(input[5]);

    let maximumRunners = capacityOfTrack * lengthMarathon;
    if (numberOfRunners >= maximumRunners) {
        numberOfRunners = maximumRunners;
    }

    let totalMetres = numberOfRunners * averageNumbersOfLap * lengthOfTrack;

    let moneyRised = totalMetres / 1000 * donetedMoneyPerKilometer;
    console.log(`Money raised: ${moneyRised.toFixed(2)}`);

}
charityMarathon(['2', '50', '2', '400', '30', '3']);
charityMarathon(['1', '50', '10', '400', '1', '2.5'])