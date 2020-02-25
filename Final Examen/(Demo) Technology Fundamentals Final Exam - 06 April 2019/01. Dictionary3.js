function dictionary([wordsWithDefs, wordsToCheck, command]) {
    let words = {};

    wordsWithDefs.split(' | ')
        .forEach(element => {
            let [word, definition] = element.split(': ');
            (!(word in words))
                ? words[word] = [definition]
                : words[word].push(definition)
        });

    wordsToCheck.split(' | ')
        .forEach(word => {
            if (word in words) {
                console.log(`${word}`);
                Object.values(words[word])
                    .sort((a, b) => b.length - a.length)
                    .forEach(definition => console.log(` -${definition}`));
            }
        });
    if (command === 'List') {
        console.log(Object
            .keys(words)
            .sort((a, b) => a.localeCompare(b))
            .join(' '));
    }
}
dictionary(['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']);
dictionary([`tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance`,
    `bit | code | tackle`,
    `End`
])