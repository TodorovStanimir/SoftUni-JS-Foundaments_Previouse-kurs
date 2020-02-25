function flightSchedule(input) {
    let flights = [];
    let Status = 'Ready to fly';
    for (let i = 0; i < input[0].length; i++) {
        let [NumberFlight, Destination] = input[0][i].split(' ');
        flights.push({
            NumberFlight,
            Destination,
            Status,
        })
    }
    for (let i = 0; i < input[1].length; i++) {
        let [NumberFlight, Status] = input[1][i].split(' ');
        for (let y = 0; y < flights.length; y++) {
            if (flights[y].NumberFlight === (NumberFlight)) {
                flights[y].Status = Status;
                break;
            }
        }
    }
    Status = input[2];
    for (let y = 0; y < flights.length; y++) {
        if (flights[y].Status === (Status[0])) {
            console.log(`{ ${Object.keys(flights[y])[1]}: '${flights[y].Destination}', ${Object.keys(flights[y])[2]}: '${flights[y].Status}' }`)
        }
    }
}
// flightSchedule([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ]);
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
]);