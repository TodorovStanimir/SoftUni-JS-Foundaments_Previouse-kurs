function commandInterpreter(input) {
    let collectionOfStrings = input.shift().split(' ').filter(element => element !== '');

    while ((line = input.shift()) !== 'end') {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'reverse') {
            let startIndex = Number(tokens[2]);
            let count = Number(tokens[4]);
            if (startIndex < 0 ||
                startIndex + count > collectionOfStrings.length ||
                count < 0 ||
                startIndex >= collectionOfStrings.length) {
                console.log('Invalid input parameters.');
            } else {
                let arrayForReversing = collectionOfStrings
                    .slice(startIndex, startIndex + count)
                    .reverse();
                collectionOfStrings.splice(startIndex, count, ...arrayForReversing);
            }
        } else if (command === 'sort') {
            let startIndex = Number(tokens[2]);
            let count = Number(tokens[4]);
            if (startIndex < 0 ||
                startIndex + count > collectionOfStrings.length ||
                count < 0 ||
                startIndex >= collectionOfStrings.length) {
                console.log('Invalid input parameters.');
            } else {
                let arrayForSorting = collectionOfStrings
                    .slice(startIndex, startIndex + count)
                    .sort((a, b) => a.localeCompare(b));
                collectionOfStrings.splice(startIndex, count, ...arrayForSorting);
            }
        } else if (command === 'rollLeft') {
            let count = Number(tokens[1]);
            count = count % collectionOfStrings.length;

            if (count < 0) {
                console.log('Invalid input parameters.');

            } else {
                for (let countOfRolling = 1; countOfRolling <= count; countOfRolling++) {
                    let rolledElement = collectionOfStrings.shift();
                    collectionOfStrings.push(rolledElement);
                }
            }
        } else if (command === 'rollRight') {
            let count = Number(tokens[1]);
            count = count % collectionOfStrings.length;

            if (count < 0) {
                console.log('Invalid input parameters.');

            } else {
                for (let countOfRolling = 1; countOfRolling <= count; countOfRolling++) {
                    let rolledElement = collectionOfStrings.pop();
                    collectionOfStrings.unshift(rolledElement);
                }
            }
        }
    }
    console.log(`[${collectionOfStrings.join(', ')}]`);
}
commandInterpreter(['1   2   5 8   7 3 10 6 4 9',
    'reverse from 2 count 4',
    'rollLeft 3 times',
    'sort from 7 count 3',
    'end'
]);
commandInterpreter(['1 2 5 8 7 3 10 6 4 9',
    'sort from 0 count 7',
    'end'
])
commandInterpreter(['1 2 3 4  5',
    'rollLeft 3 times',
    'end'
])
commandInterpreter(['1 2 3 4 5',
    'rollRight 1 times',
    'end'
])
commandInterpreter(['1 2 3 4 5',
    'sort from -1 count 2',
    'sort from 0 count -1',
    'reverse from 5 count 1',
    'end'
]);
commandInterpreter(['a b c',
    'rollRight 2000000000 times',
    'end'
])