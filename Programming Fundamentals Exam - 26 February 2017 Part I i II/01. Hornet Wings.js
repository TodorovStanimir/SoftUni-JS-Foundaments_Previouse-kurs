hornetWings = (input) => {
    let wingFlaps = parseInt(input[0]);
    let distanceFor1000WingFlaps = parseFloat(input[1]);
    let endurance = parseInt(input[2]);
    let distance = wingFlaps / 1000 * distanceFor1000WingFlaps;
    let time = wingFlaps / 100;
    let timeForRest=Math.floor(wingFlaps/endurance)*5;
    time+=timeForRest;

    console.log(`${distance.toFixed(2)} m.`);
    console.log(`${time} s.`);
}
hornetWings(['2000', '5', '200', ''])
hornetWings(['1000000', '10', '1500', ''])