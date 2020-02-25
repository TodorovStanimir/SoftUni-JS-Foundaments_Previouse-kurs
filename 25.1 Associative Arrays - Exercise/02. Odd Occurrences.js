function oddOccurrences(input) {
    let arrayInput = input.split(' ');
    let output = new Map();

    for (let word of arrayInput) {
        word = word.toLowerCase();
        if (!output.has(word)) {
            output.set(word, 1);
        } else {
            output.set(word, output.get(word) + 1);
        }
    }

    for (let [word, count] of output) {
        if (count % 2 === 0) {
            output.delete(word);
        }
    }  
    console.log(Array.from(output.keys()).join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');