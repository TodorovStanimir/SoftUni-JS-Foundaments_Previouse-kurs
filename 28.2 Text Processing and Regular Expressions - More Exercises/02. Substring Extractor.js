function subString(word, string) {
    let output = []
    let counter = 0;
    string.split(' ').forEach(element => {
        if (!element.toLowerCase().includes(word.toLowerCase())) {
            console.log(`idx[${counter}] -> ${element}`);
            counter++;
        }
    });
}
subString('wel', 'Welcome to the Software University!');