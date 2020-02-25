function concert(input) {
    let bands = {};

    while ((line = input.shift()) !== 'start of concert') {
        let tokens = line.split('; ');
        let command = tokens[0];
        if (command === 'Play') {
            let [band, time] = [tokens[1], Number(tokens[2])]
            if (!(band in bands)) {
                bands[band] = { time, members: [] }
            } else {
                bands[band].time += time;
            }
        } else {
            let [band, members] = [tokens[1], [...new Set(tokens[2].split(', '))]]
            if (!(band in bands)) {
                bands[band] = { time: 0, members }
            } else {
                let newMembers = [...new Set(bands[band].members.concat(members))];
                bands[band].members = newMembers;
            }
        }
    }
    let totalTime = Object.entries(bands).map(element => { return element[1].time; }).reduce((a, b) => a + b, 0)
    console.log(`Total time: ${totalTime}`);
    Object.entries(bands)
        .sort((a, b) => b[1].time - a[1].time || a[0].localeCompare(b[0]))
        .forEach(band => {
            console.log(`${band[0]} -> ${band[1].time}`)
        });
    let band = input.shift();
    console.log(band);
    Object.values(bands[band])[1].forEach(member => console.log(`=> ${member}`))
}
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr, John Lennon',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'])
concert(['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles']
)