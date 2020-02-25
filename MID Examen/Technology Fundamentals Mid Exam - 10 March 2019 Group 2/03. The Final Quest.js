function theFinalQuest(input) {
    let collectionOfWords = input.shift().split(' ');
    let currentCommand = input.shift().split(' ');
    while (currentCommand[0] !== 'Stop') {
        if (currentCommand[0] === 'Delete') {
            let index = Number(currentCommand[1]) + 1;
            if (0 <= index && index < collectionOfWords.length) {
                let word = collectionOfWords[index];
                collectionOfWords = collectionOfWords.filter(a => a !== word);
            }
        } else if (currentCommand[0] === 'Swap') {
            let word1 = currentCommand[1];
            let word2 = currentCommand[2];
            let indexes1 = [];
            let indexes2 = []
            for (let i = 0; i < collectionOfWords.length; i++) {
                if (collectionOfWords.includes(word1) && collectionOfWords.includes(word2) && word1 !== word2) {
                    if (collectionOfWords[i] === word1) {
                        indexes1.push(i);
                    } else if (collectionOfWords[i] === word2) {
                        indexes2.push(i);
                    }
                }
            }
            for (let i = 0; i < indexes1.length; i++) {
                collectionOfWords[indexes1[i]]=word2;
                collectionOfWords[indexes2[i]]=word1;
                // collectionOfWords[indexes1[i]] = collectionOfWords.splice(indexes2[i], 1, collectionOfWords[indexes1[i]])[0];
            }
        } else if (currentCommand[0] === 'Put') {
            let word = currentCommand[1];
            let index = Number(currentCommand[2]) - 1;
            if (0 <= index && index <= collectionOfWords.length && word!=='') {
                collectionOfWords.splice(index, 0, word);
            }
        } else if (currentCommand[0] === 'Sort') {
            collectionOfWords.sort();
            collectionOfWords.reverse()
        } else if (currentCommand[0] === 'Replace') {
            let word1 = currentCommand[1];
            let word2 = currentCommand[2];
            for (let i = 0; i < collectionOfWords.length; i++) {
                if (collectionOfWords[i] === word2 && word1!=='') {
                    collectionOfWords[i] = word1;
                }
            }
        }
        currentCommand = input.shift().split(' ');
    }

    console.log(collectionOfWords.join(' '));
}
theFinalQuest(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop",
    "Put no 4"

]);
theFinalQuest(["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"
]);