function palindromes(input) {
    let palindromArray = [];
    let pattern = /\b[a-zA-Z]+\b/g
    for (let word of input) {
        let arrayWords = []
        while ((currentWord = pattern.exec(word)) !== null) {
            arrayWords.push(currentWord[0]);
        }
        let originalWord = arrayWords.join('');
        let reversedWord = originalWord.split('').reverse().join('');
        if (originalWord === reversedWord) {
            palindromArray.push(originalWord);
        }
    }
    if (palindromArray.length === 0) {
        console.log('No palindromes found');
    } else {
        console.log(palindromArray.join(', '));
    }
}
palindromes([' stella won no wallets', 'cottoc', 'not a palindrome']);
palindromes(['stella won wallets', 'not a palindrome']);