function grainsOfSands(input) {
    let grains = input.shift().split(' ').map(Number);
    while ((line = input.shift()) !== 'Mort') {
        let tokens = line.split(' ');
        let command = tokens.shift();
        if (command === 'Add') {
            let newValue = Number(tokens.shift());
            grains.push(newValue);
        } else if (command === 'Remove') {
            let value = Number(tokens.shift());
            if (grains.indexOf(value) !== -1) {
                grains.splice(grains.indexOf(value), 1)
            } else {
                if (0 <= value && value < grains.length) {
                    grains.splice(value, 1);
                }
            }
        } else if (command === 'Replace') {
            let value = Number(tokens.shift());
            let replacement = Number(tokens.shift());
            if (grains.indexOf(value) !== -1) {
                grains.splice(grains.indexOf(value), 1, replacement)
            }
        } else if (command === 'Increase') {
            let value = Number(tokens.shift());
            let increasement = grains[grains.length - 1];
            for (let element of grains) {
                if (element >= value) {
                    increasement = element;
                    break;
                }
            }
            grains = grains.map(el => el + increasement);
        } else if (command === 'Collapse') {
            let value = Number(tokens.shift());
            grains = grains.filter(el => el >= value);
        }
    }
    console.log(grains.join(' '));
}
grainsOfSands(['1 4 5 19 13 42 69 24',
    'Add 1',
    'Remove 3',
    'Remove 4',
    'Remove 15',
    'Replace 0 26',
    'Replace 1 26',
    'Mort'
]);
grainsOfSands(['1 2 -1 0 -3 9 8 7 2',
    'Increase 10',
    'Increase 90',
    'Collapse 8',
    'Mort'
])