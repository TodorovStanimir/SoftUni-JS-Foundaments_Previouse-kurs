function concert(input) {
    let bandsByMembers = {};
    let bandsByTime = {};
    while ((line = input.shift()) !== 'start of concert') {
        if (line.startsWith('Add; ')) {
            let [bandName, rawMembers] = line.substring('Add; '.length).split('; ');
            members = rawMembers.split(', ');
            if (!(bandName in bandsByMembers)) {
                bandsByMembers[bandName] = [];
            }
            members.forEach(member => {
                if (!bandsByMembers[bandName].includes(member)) bandsByMembers[bandName].push(member)
            });
        } else if (line.startsWith('Play; ')) {
            let [bandName, time] = line.substring('Play; '.length).split('; ');
            (!(bandName in bandsByTime))
                ? bandsByTime[bandName] = Number(time)
                : bandsByTime[bandName] += Number(time)
        }
    }
    let totalTime = Object.values(bandsByTime).reduce((a, b) => a + b, 0);
    console.log(`Total time: ${totalTime}`);
    Object.entries(bandsByTime)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1])
        .forEach(band => console.log(`${band[0]} -> ${band[1]}`));

    let band = input.shift();
    console.log(`${band}`)
    Object.values(bandsByMembers[band]).forEach(member => console.log(`=> ${member}`));
}
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Ringo Starr, Paul McCartney, George Harrison, Ringo Starr',
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