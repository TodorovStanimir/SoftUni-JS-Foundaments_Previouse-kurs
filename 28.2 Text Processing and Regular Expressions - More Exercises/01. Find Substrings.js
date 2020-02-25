function findSubstring(string, word) {
    let counterWord = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.substr(i, word.length).toLowerCase() === word.toLowerCase()) {
            counterWord++;
        }
    }
    console.log(counterWord);
}
findSubstring("Welcome to the Software University (SoftUni)! Welcome to programming. Programming is wellness for developers, said Maxwell.", "wel");