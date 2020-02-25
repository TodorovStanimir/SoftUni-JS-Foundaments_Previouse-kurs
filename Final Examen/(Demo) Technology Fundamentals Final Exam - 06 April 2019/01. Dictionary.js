function dictionary(input) {

    let wordsAndDefinitions = input.shift().split(' | ');
    let dictionary = new Map();


    for (let wordAndDefinition of wordsAndDefinitions) {
        let [word, definition] = wordAndDefinition.split(': ');
        if (dictionary.has(word)) {
            let currentDefinitions = dictionary.get(word);
            currentDefinitions.push(definition);
            dictionary.set(word, currentDefinitions);
        } else {
            dictionary.set(word, [definition]);
        }
    }
    let wordsForChecking = input.shift().split(' | ');
    for (let checkedWord of wordsForChecking) {
        if (dictionary.has(checkedWord)) {
            console.log(checkedWord);
            dictionary
                .get(checkedWord)
                .sort((a, b) => b.length - a.length)
                .forEach(element => {
                    console.log(` -${element}`);
                });;
        }
    }

    let lastCommand = input.shift();

    if (lastCommand === 'List') {
        console.log(Array.from(dictionary.keys()).sort((a, b) => a.localeCompare(b)).join(' '));
    }
}

// dictionary(['programmer: an animal, which turns coffee into code | developer: a magician',
//     'Pesho | Gosho',
//     'List'
// ]);

dictionary(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
]);