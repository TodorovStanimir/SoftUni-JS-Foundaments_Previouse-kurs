function stringSubstring(word, text) {
    text = text.split(' ');
    let foundWord = false;
    for (currentWord of text) {
        if (word.toLowerCase() === currentWord.toLowerCase()) {
            foundWord = true;
            break;
        }
    }
    console.log(foundWord ? word : `${word} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python','JavaScript is the best programming language');