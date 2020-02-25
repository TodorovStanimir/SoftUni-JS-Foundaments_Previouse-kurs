function nascarQualifications(input) {
    let racers = input.shift().split(' ');
    for (let line of input) {
        if (line === 'end') break;
        let [command, racer, racersCount] = line.split(' ');
        if (command === 'Race') {
            if (!racers.includes(racer)) {
                racers.push(racer);
            }
        } else if (command === 'Accident') {
            if (racers.includes(racer)) {
                racers.splice(racers.indexOf(racer), 1);
            }
        } else if (command === 'Box') {
            let indexOfRacer = racers.indexOf(racer);
            if (indexOfRacer !== -1 && indexOfRacer < racers.length - 1) {
                racers.splice(indexOfRacer, 1);
                racers.splice(indexOfRacer + 1, 0, racer);
            }
        } else if (command === 'Overtake') {
            let indexOfRacer = racers.indexOf(racer);
            if (indexOfRacer !== -1 && indexOfRacer - racersCount >= 0) {
                racers.splice(indexOfRacer, 1);
                racers.splice(indexOfRacer - racersCount, 0, racer);
            }
        }
    }
    console.log(racers.join(' ~ '))
}
nascarQualifications(['Vetel Hamilton Raikonnen Botas Slavi',
    'Box Hamilton',
    'Overtake LeClerc 2',
    'Race Ricardo',
    'Accident Botas',
    'Overtake Ricardo 1',
    'Accident Slavi',
    'end']);
nascarQualifications([ 'Vetel Hamilton Slavi',
'Box Hamilton',
'Overtake Hamilton 2',
'Accident Slavi',
'end' ]);