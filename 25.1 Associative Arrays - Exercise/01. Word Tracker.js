function wordTracker(input) {
    let wordsArray = input.shift().split(' ');
    let words = new Map();
    for (let word of wordsArray) {
        words.set(word, 0);
    }

    for (let word of input) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        }
    }
    let sortedWords = Array.from(words.entries());
    sortedWords.sort((a, b) => b[1] - a[1]);

    for (let [word,count] of sortedWords){
        console.log(`${word} - ${count}`);
    }
}
wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);