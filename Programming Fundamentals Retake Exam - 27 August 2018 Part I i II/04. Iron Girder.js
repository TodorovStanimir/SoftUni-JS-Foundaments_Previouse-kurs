function ironGirder(input) {
    let result = new Map();
    while ((line = input.shift()) !== 'Slide rule') {
        let [nameAndtimeOrAmbush, passengerCount] = line.split('->');
        let [townName, timeOrAmbush] = nameAndtimeOrAmbush.split(':');
        passengerCount = Number(passengerCount);
        if (timeOrAmbush !== 'ambush') {
            let time = Number(timeOrAmbush);
            if (result.has(townName)) {
                passengerCount += result.get(townName)[1];
                if (time > result.get(townName)[0] && result.get(townName)[0] !== 0) {
                    time = result.get(townName)[0];
                }
            }
            result.set(townName, [time, passengerCount]);
        } else {
            if (result.has(townName)) {
                let passengers = result.get(townName)[1] - passengerCount;
                result.set(townName, [0, passengers]);
            }
        }
    }
    let output = [...result.entries()];

    output.sort((a, b) => {
        if (a[1][0] > b[1][0] || a[1][0] < b[1][0]) {
            return a[1][0] - b[1][0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    output.forEach(element => {
        if (element[1][0] !== 0 && element[1][1] > 0) {
            console.log(`${element[0]} -> Time: ${element[1][0]} -> Passengers: ${element[1][1]}`);
        }
    });
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