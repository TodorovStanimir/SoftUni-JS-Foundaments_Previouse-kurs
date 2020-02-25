function grainsOfSands(input) {
    let grains = input.shift().split(' ').map(Number);

    while ((line = input.shift()) !== 'Mort') {
        let [command, value, replacement] = line.split(' ');
        value = Number(value);
        replacement = Number(replacement);
        if (command === 'Add') {
            grains.push(value);
        } else if (command === 'Remove') {
            if (grains.includes(value)) {
                for (let i = 0; i < grains.length; i++) {
                    if (grains[i] === value) {
                        grains.splice(i, 1);
                        break;
                    }
                }
            } else if (0 <= value && value <= grains.length - 1) {
                grains.splice(value, 1);
            }
        } else if (command === 'Replace') {
            if (grains.includes(value)) {
                for (let i = 0; i < grains.length; i++) {
                    if (grains[i] === value) {
                        grains[i] = replacement;
                        break;
                    }
                }
            }
        } else if (command === 'Increase') {
            let firstElement = 0;
            let thereIsFirstElement = false;
            for (let index in grains) {
                if (grains[index] >= value) {
                    firstElement = grains[index];
                    thereIsFirstElement = true;
                    break;
                }
            }
            if (thereIsFirstElement) {
                grains = grains.map(x => x + firstElement);
            } else {
                let lastElement = grains[grains.length - 1];
                grains = grains.map(x => x + lastElement);
            }
        } else if (command === 'Collapse') {
            let newArray = []
            for (let i = 0; i < grains.length; i++) {
                if (grains[i] >= value) {
                    newArray.push(grains[i]);
                }
            }
            grains = [];
            grains = newArray.splice(0);
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