function ironGirder(input) {
    let result = {};

    while ((line = input.shift()) !== 'Slide rule') {
        let [town, timeOrAmbush, passendgers] = line.split(/\:|\->/);
        passendgers = Number(passendgers);

        if (timeOrAmbush !== 'ambush') {
            let time = Number(timeOrAmbush);
            if (!result[town]) {
                result[town] = {
                    time: 0,
                    passendgers: 0
                }
            }
            if (result[town].time === 0 || result[town].time > time) {
                result[town].time = time;
            }
            result[town].passendgers += passendgers;
        } else {
            if (result[town]) {
                result[town].time = 0;
                result[town].passendgers -= passendgers;
            }
        }
    }
    
    Object.entries(result)
        .filter(town => town[1].time !== 0)
        .sort((a, b) => { return a[1].time - b[1].time || a[0].localeCompare(b[0]) })
        .forEach(town =>
             console.log(`${town[0]} -> Time: ${town[1].time} -> Passengers: ${town[1].passendgers}`));
}
ironGirder(['Sto-Lat:8->120',
    'Ankh-Morpork:3->143',
    'Sto-Lat:9->80',
    'Ankh-Morpork:4->143',
    'Sto-Lat:3->20',
    'Quirm:12->40',
    'Quirm:13->29',
    'Slide rule'
])
ironGirder(['Quirm:12->258',
    'Ankh-Morpork:ambush->200',
    'Ankh-Morpork:3->143',
    'Sto-Lat:4->80',
    'Ankh-Morpork:4->143',
    'Ankh-Morpork:ambush->143',
    'Sto-Lat:3->20',
    'Ankh-Morpork:5->17',
    'Slide rule'
])