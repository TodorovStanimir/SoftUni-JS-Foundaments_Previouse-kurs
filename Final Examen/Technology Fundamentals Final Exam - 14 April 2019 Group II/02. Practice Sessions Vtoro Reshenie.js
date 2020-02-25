function practiceSessions(input) {
    let roads = {};

    while ((line = input.shift()) !== 'END') {
        if (line.startsWith('Add')) {
            let [command1, road, racer] = line.split('->');
            if (!(road in roads)) {
                roads[road] = [];
            }
            roads[road].push(racer);
        } else if (line.startsWith('Move')) {
            let [command2, presentRoad, racer, newRoad] = line.split('->');
            if (roads[presentRoad].includes(racer)) {
                roads[presentRoad].splice(roads[presentRoad].indexOf(racer), 1);
                roads[newRoad].push(racer);
            }
        } else if (line.startsWith('Close')) {
            let [command3, road] = line.split('->');
            delete roads[road];
        }
    }
    console.log('Practice sessions:');
    Object.entries(roads)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(road => {
            console.log(`${road[0]}`);
            road[1].forEach(racer => console.log(`++${racer}`));
        })
}
practiceSessions(["Add->Glencrutchery Road->Giacomo Agostini",
    "Add->Braddan->Geoff Duke",
    "Add->Peel road->Mike Hailwood",
    "Add->Glencrutchery Road->Guy Martin",
    "Move->Glencrutchery Road->Giacomo Agostini->Peel road",
    "Close->Braddan1",
    "END"
]);
practiceSessions(["Add->Glen Vine->Steve Hislop",
    "Add->Ramsey road->John McGuinness",
    "Add->Glen Vine->Ian Hutchinson",
    "Add->Ramsey road->Dave Molyneux",
    "Move->Ramsey road->Hugh Earnsson->Glen Vine",
    "Add->A18 Snaefell mountain road->Mike Hailwood",
    "Add->Braddan->Geoff Duke",
    "Move->A18 Snaefell mountain road->Mike Hailwood->Braddan",
    "Move->Braddan->John McGuinness->Glen Vine",
    "Close->A18 Snaefell mountain road",
    "END",
])