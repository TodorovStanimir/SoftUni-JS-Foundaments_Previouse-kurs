function countStringOccurrences(text, string) {
    let counter = 0;
    text.split(' ').forEach(element => {
        if (element === string) {
            counter++;
        }
    });
    console.log(counter);
}
countStringOccurrences("This is a word and it also is a sentence", "is");