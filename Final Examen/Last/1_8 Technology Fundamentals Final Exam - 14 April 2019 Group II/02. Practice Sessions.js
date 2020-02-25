function practiceSessions(input) {
    let roads = {};
    for (let line of input) {
        if (line === 'END') {
            break;
        }
        let [command, road, racer, nextRoad] = line.split('->');
        if (command === 'Add') {
            if (!roads[road]) {
                roads[road] = [];
            }
            roads[road].push(racer);
        } else if (command === 'Move') {
            if (roads[road].includes(racer)) {
                roads[road].splice(roads[road].indexOf(racer), 1);
                roads[nextRoad].push(racer);
            }
        } else if (command === 'Close') {
            if (roads[road]) {
                delete roads[road];
            }
        }
    }
    console.log('Practice sessions:');
    Object.entries(roads).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).forEach((element, ind) => {
        console.log(element[0])
        element[1].forEach(el => console.log(`++${el}`));
    });
}
practiceSessions(["Add->Glencrutchery Road->Giacomo Agostini",
    "Add->Braddan->Geoff Duke",
    "Add->Peel road->Mike Hailwood",
    "Add->Glencrutchery Road->Guy Martin",
    "Move->Glencrutchery Road->Giacomo Agostini->Peel road",
    "Close->Braddan",
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