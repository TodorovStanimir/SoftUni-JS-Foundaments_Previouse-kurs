regexmon = (input) => {
    for (let i = 0; i < input.length; i++) {
        let bojomonStart = false;
        let didimonStart = true;
        let text = String(input[i]);
        let patternBojomon = /(?<bojo>[a-zA-Z]+[-][a-zA-Z]+)/g;
        let patternDidimon = /(?<didi>[ !"#$%&'()*+,./\d:;<=>?@[\\\]^_`{\|}~]+)/g;

        while (text.length > 0) {
            if (bojomonStart) {
                let bojomonText = text.match(patternBojomon);
                if (!bojomonText) {
                    break;
                }
                console.log(bojomonText[0]);
                didimonStart = true;
                bojomonStart = false;
                text = text.substring(text.indexOf(bojomonText[0]) + bojomonText[0].length);
            } else if (didimonStart) {
                let didimonText = text.match(patternDidimon);
                if (!didimonText) {
                    break;
                }
                console.log(didimonText[0]);
                didimonStart = false;
                bojomonStart = true;
                text = text.substring(text.indexOf(didimonText[0]) + didimonText[0].length);
            }
        }
    }
}
regexmon(['^^^^pika-pika^^^^', '']);
regexmon(['!.!asd-asd---??!chuuuu!!!asd-dsa', '']);