function theFinalQuest(input) {
    let result = input.shift().split(' ');

    while ((line = input.shift()) !== 'Stop') {
        let tokens = line.split(' ');
        let command = tokens.shift();

        if (command === 'Delete') {
            let index = Number(tokens[0]) + 1;
            if (index >= 0) {
                result.splice(index, 1);
            }
        } else if (command === 'Swap') {
            let word1 = tokens[0];
            let word2 = tokens[1];
            let indexWord1 = result.indexOf(word1);
            let indexWord2 = result.indexOf(word2);
            if (indexWord1 !== -1 && indexWord2 !== -1) {
                result[indexWord1] = word2;
                result[indexWord2] = word1;
            }
        } else if (command === 'Put') {
            let word = tokens[0];
            let index = Number(tokens[1]) - 1;
            if (index >= 0 && index <= result.length) {
                result.splice(index, 0, word);
            }
        } else if (command === 'Sort') {
            result.sort((a, b) => b.localeCompare(a));
        } else if (command === 'Replace') {
            let word1 = tokens[0];
            let word2 = tokens[1];
            let indexOfWord2 = result.indexOf(word2);
            if (indexOfWord2 !== -1) {
                result[indexOfWord2] = word1;
            }
        }
    }
    console.log(result.join(' '));
}
theFinalQuest(['Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    ''
]);
theFinalQuest(['This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
])