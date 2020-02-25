theFinalQuest = (input) => {
    let collection = input.shift().split(' ');
    while ((line = input.shift()) !== 'Stop') {
        commandLine = line.split(' ');
        let command = commandLine[0];
        if (command === 'Delete') {
            let index = Number(commandLine[1]) + 1;
            if (0 <= index && index < collection.length) {
                let word1 = collection[index];
                collection = collection.filter(word => word !== word1)
            }
        } else if (command === 'Swap') {
            let word1 = commandLine[1];
            let word2 = commandLine[2];
            let indexes1 = [];
            let indexes2 = []
            for (let i = 0; i < collection.length; i++) {
                if (collection.includes(word1) && collection.includes(word2) && word1 !== word2) {
                    if (collection[i] === word1) {
                        indexes1.push(i);
                    } else if (collection[i] === word2) {
                        indexes2.push(i);
                    }
                }
            }
            for (let i = 0; i < indexes1.length; i++) {
                collection[indexes1[i]] = word2;
                collection[indexes2[i]] = word1;
            }
        } else if (command === 'Put') {
            let word = commandLine[1];
            let index = Number(commandLine[2]) - 1;
            if (0 <= index && index <= collection.length) {
                collection.splice(index, 0, word)
            }
        } else if (command === 'Sort') {
            collection.sort()
            collection.reverse()
        } else if (command === 'Replace') {
            let word1 = commandLine[1];
            let word2 = commandLine[2];
            collection.forEach(word => {
                if (word === word2) {
                    collection[collection.indexOf(word2)] = word1;
                }
            });
        }
    }
    console.log(collection.join(' '));
}
theFinalQuest(['Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    ''
])
theFinalQuest(['This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
])

theFinalQuest(['a b c d',
    'Sort',
    'Stop'
])