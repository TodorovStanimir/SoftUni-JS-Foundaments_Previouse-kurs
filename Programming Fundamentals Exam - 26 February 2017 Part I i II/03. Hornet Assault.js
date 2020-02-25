hornetAssault = (arr) => {
    let beehives = arr[0].split(' ').map(Number);
    let hornets = arr[1].split(' ').map(Number);
    let powerOfhornets = hornets.reduce((a, b) => a + b, 0);
    let beehivesCounter = 0;
    let hornetsCounter = 0;
    while (beehivesCounter <= beehives.length - 1) {
        if (beehives[beehivesCounter] < powerOfhornets) {
            beehives[beehivesCounter] = 0;
            beehivesCounter++;
        } else if (beehives[beehivesCounter] >= powerOfhornets) {
            beehives[beehivesCounter] = beehives[beehivesCounter] - powerOfhornets;
            powerOfhornets -= hornets[hornetsCounter];
            hornets[hornetsCounter] = 0;
            hornetsCounter++;
            beehivesCounter++;
        }
        if (hornets.reduce((a, b) => a + b) === 0) {
            break;
        }
    }
    if (beehives.reduce((a, b) => a + b) > 0) {
        beehives = beehives.filter(element => element !== 0);
        console.log(beehives.join(' '));
    } else {
        hornets = hornets.filter(element => element !== 0)
        console.log(hornets.join(' '));
    }
}
hornetAssault(['20 10 20 30', '5 10 5 3', '']);
hornetAssault(['10 20 10 15', '5 6 7', ''])
hornetAssault(['20 100 40 45 20 10', '40 10 5 40 5', ''])