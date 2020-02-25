function ironGirder(input) {
    let railWays = new Map();

    while ((line = input.shift()) !== 'Slide rule') {
        let [train, passengers] = line.split('->');
        passengers = Number(passengers);
        let [town, timeOrAmbush] = train.split(':');
        let time = 0;
        if (timeOrAmbush !== 'ambush') {
            time = Number(timeOrAmbush);
            if (!railWays.has(town)) {
                railWays.set(town, [time, passengers]);
            } else {
                if (railWays.get(town)[0] > time || railWays.get(town)[0] === 0) {
                    railWays.get(town)[0] = time;
                }
                railWays.get(town)[1] = railWays.get(town)[1] + passengers;
            }
        } else {
            if (railWays.has(town)) {
                railWays.get(town)[0] = time;
                railWays.get(town)[1] = railWays.get(town)[1] - passengers;
            }
        }
    }
    let result = [...railWays.entries()]
        .sort((a, b) => {
            if (a[1][0] > b[1][0] || a[1][0] < b[1][0]) {
                return a[1][0] - b[1][0];
            } else {
                return a[0].localeCompare(b[0]);
            }
        })

    result.forEach(el => {
        if (el[1][0] !== 0 && el[1][1] !== 0){
            console.log(`${el[0]} -> Time: ${el[1][0]} -> Passengers: ${el[1][1]}`);
        }
    })
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