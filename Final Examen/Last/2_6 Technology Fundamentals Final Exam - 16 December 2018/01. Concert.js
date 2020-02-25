function concert(input) {
    let groups = {};
    let totalTime = 0;
    for (let line of input) {
        if (line === 'start of concert') {
            break;
        }
        let [command, group, timeOrmembres] = line.split('; ');
        if (command === 'Play') {
            if (!groups[group]) {
                groups[group] = {
                    time: Number(timeOrmembres),
                    members: []
                }
            } else {
                groups[group].time += Number(timeOrmembres);
            }
            totalTime += Number(timeOrmembres)
        } else if (command === 'Add') {
            let members = [...new Set(timeOrmembres.split(', '))];
            if (!groups[group]) {
                groups[group] = {
                    time: 0,
                    members
                }
            } else {
                groups[group].members = [...new Set(groups[group].members.concat(members))];
            }
        }
    }
    console.log(`Total time: ${totalTime}`);
    Object.entries(groups).sort((a, b) => b[1].time - a[1].time || a[0].localeCompare(b[0])).forEach(group => {
        console.log(`${group[0]} -> ${group[1].time}`);
    });
    let group = input.pop();
    console.log(group);
    Object.values(groups[group].members).forEach(member => console.log(`=> ${member}`))
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