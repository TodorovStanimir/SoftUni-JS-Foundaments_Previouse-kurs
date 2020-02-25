function wordOccurences(input) {
    let words = new Map();

    for (let currWord of input) {

        if (!words.has(currWord)) {
            words.set(currWord, 1);
        } else {
            let currcounts = words.get(currWord);
            currcounts++;
            words.set(currWord, currcounts);
        }
    }

    let sorted = (Array.from(words.entries())).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"
]);