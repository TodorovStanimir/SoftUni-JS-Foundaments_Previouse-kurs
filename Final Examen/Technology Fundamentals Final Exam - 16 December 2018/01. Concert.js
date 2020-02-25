function concert(input) {
    let bandForPrinting = input.pop();
    let commandLine = input.shift();
    let groups = new Map();
    let totalTime = 0;

    while (commandLine !== 'start of concert') {
        let [command, groupName, timeOrSingers] = commandLine.split('; ');
        if (command === 'Add') {
            let singers = timeOrSingers.split(', ')
            if (!groups.has(groupName)) {
                groups.set(groupName, [0, singers]);
            } else {
                singers.forEach(singer => {
                    if (!groups.get(groupName)[1].includes(singer)) {
                        groups.get(groupName)[1].push(singer);
                    }
                })
            }
        } else if (command === 'Play') {
            let time = parseInt(timeOrSingers);
            totalTime += time;
            if (!groups.has(groupName)) {
                groups.set(groupName, [time, []]);
            } else {
                let currentTime = groups.get(groupName)[0]
                time += currentTime;
                groups.get(groupName)[0] = time;
            }
        }
        commandLine = input.shift();
    }
    let output = [...groups.entries()];

    output.sort((group1, group2) => {
        if (group1[1][0] > group2[1][0] || group1[1][0] < group2[1][0]) {
            return group2[1][0] - group1[1][0]
        } else {
            if (String(group2[0]) > String(group1[0])) {
                return -1
            } else if (String(group2[0]) < String(group1[0])) {
                return 1
            }
        }
    });

    if (output.length > 0) {
        console.log(`Total time: ${totalTime}`);
    }
    output.forEach(group => {
        console.log(`${group[0]} -> ${group[1][0]}`);
    });

    output.forEach(group => {
        if (group[0] === bandForPrinting) {
            console.log(group[0]);
            group[1][1].forEach(singer => {
                console.log(`=> ${singer}`);;
            });
        }
    });
}
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]);
concert(['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
])