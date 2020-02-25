function dictionary([wordsWithDefs, wordsToCheck, command]) {
    let result = {};
 
    wordsWithDefs
        .split(" | ")
        .map(e => e.split(": "))
        .forEach(([word, definition]) => {
            if (!(word in result)) {
                result[word] = [];
            }
            result[word].push(definition)
        })
        wordsToCheck.split(' | ').forEach(word => {
            if (word in result) {
                console.log(word)
 
                result[word]
                    .sort((a, b) => b.length - a.length)
                    .forEach(definition => {
                        console.log(` -${definition}`)
                    })
            }
        });
        if (command  === `List`) {
            console.log(
                Object.keys(result)
                .sort((a, b) => a.localeCompare(b))
                .join(' ')
            )
        }
}
dictionary([`tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance`,
    `bit | code | tackle` ,
    `End`
])