function charityMarathon(input) {
    let lengthMarathon = parseInt(input.shift());
    let numberRunners = parseInt(input.shift());
    let averageNumberOfLapsForEveryRunner = parseInt(input.shift());
    let lengthOfTrack = parseInt(input.shift());
    let capacityOfTrack = parseInt(input.shift());
    let donetedMoneyPerKilometer = parseFloat(input.shift());

    let moneyRaised = (Math.min(lengthMarathon * capacityOfTrack, numberRunners)
        * averageNumberOfLapsForEveryRunner * lengthOfTrack) / 1000 * donetedMoneyPerKilometer;

    console.log(`Money raised: ${moneyRaised.toFixed(2)}`);
}
charityMarathon(['2', '50', '2', '400', '30', '3'])
charityMarathon(['1', '50', '10', '400', '1', '2.5'])
