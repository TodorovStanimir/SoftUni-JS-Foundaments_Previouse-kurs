function dictionary([wordsWithDefs, wordsToCheck, command]) {
    let dictionary = {};
    wordsWithDefs.split(' | ').forEach(element => {
        let [word, def] = element.split(': ');
        if (!dictionary[word]) {
            dictionary[word] = [def];
        } else {
            dictionary[word].push(def);
        }
    });
    let words = wordsToCheck.split(' | ');
    for (word of words) {
        if (dictionary[word]) {
            console.log(word)
            Object.values(dictionary[word]).sort((a, b) => b.length - a.length).forEach(def => console.log(` -${def}`));
        }
    }
    if (command === 'List') {
        console.log(Object.keys(dictionary).sort((a, b) => a.localeCompare(b)).join(' '));
    }
}
dictionary(['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List']);
dictionary(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'])