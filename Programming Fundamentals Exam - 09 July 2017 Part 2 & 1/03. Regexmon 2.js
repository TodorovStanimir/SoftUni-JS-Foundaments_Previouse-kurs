regexmon = (input) => {
    let patternDidimon = /([^A-Za-z-]+)/g;
    let patternBojomon = /([A-Za-z]+[-][A-Za-z]+)/g;
    let string = input[0];
    while (string.length > 0) {
        if (string.match(patternDidimon)) {
            let matchedByDidimon = string.match(patternDidimon)[0];
            console.log(matchedByDidimon);
            string = string.substring(string.indexOf(matchedByDidimon)+matchedByDidimon.length)
        } else {
            break;
        }
        if (string.match(patternBojomon)) {
            let matchedByBojomon = string.match(patternBojomon)[0];
            console.log(matchedByBojomon);
            string = string.substring(string.indexOf(matchedByBojomon)+matchedByBojomon.length)
        } else {
            break;
        }
    }
}
regexmon(['^^^^pika-pika^^^^', '']);
regexmon(['!.!asd-asd---??!chuuuu!!!asd-dsa', '']);