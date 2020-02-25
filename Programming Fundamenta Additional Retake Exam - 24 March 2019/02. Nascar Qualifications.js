function nascarQualifications(input) {

    let raceResults = String(input.shift()).split(' ');

    let commandLine = String(input.shift());

    while (commandLine !== 'end') {
        let [command, racer, position] = commandLine.split(' ');
        if (command === 'Race') {
            if (!raceResults.includes(racer)) {
                raceResults.push(racer);
            }
        } else if (command === 'Accident') {
            if (raceResults.includes(racer)) {
                let indexofRacer = raceResults.indexOf(racer);
                raceResults.splice(indexofRacer, 1);
            }
        } else if (command === 'Box') {
            let indexofRacer = raceResults.indexOf(racer);
            nextRacer = raceResults[indexofRacer + 1]
            if (raceResults.length - 1 !== indexofRacer) {
                raceResults[indexofRacer] = nextRacer;
                raceResults[indexofRacer + 1] = racer;
            }
        } else if (command === 'Overtake') {
            if (raceResults.includes(racer) && (raceResults.indexOf(racer) - position >= 0)) {
                let indexofRacer = raceResults.indexOf(racer);
                a = raceResults.splice(indexofRacer, 1);
                raceResults.splice(indexofRacer - position, 0, racer);
            }
        }
        commandLine = String(input.shift());
    }
    console.log(raceResults.join(' ~ '));
}
nascarQualifications([
    ['Vetel Hamilton Raikonnen Botas Slavi'],
    ['Box Hamilton'],
    ['Overtake LeClerc 2'],
    ['Race Ricardo'],
    ['Accident Botas'],
    ['Overtake Ricardo 1'],
    ['Accident Slavi'],
    ['end']
]);
nascarQualifications([
    ['Vetel Hamilton Slavi'],
    ['Box Hamilton'],
    ['Overtake Hamilton 2'],
    ['Accident Slavi'],
    ['end']
]);