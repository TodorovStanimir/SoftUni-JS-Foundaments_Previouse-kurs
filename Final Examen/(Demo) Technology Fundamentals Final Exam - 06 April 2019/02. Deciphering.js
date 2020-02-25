function deciphering([encriptedString, substring]) {
    let isTextCorrect = true;
    let decreptedString = encriptedString
        .split('')
        .map(char => {
            if (char.match(/[d-z{}|#]/g)) {
                return String.fromCharCode(char.charCodeAt() - 3)
            } else {
                isTextCorrect = false
            }
        })
        .join('')
    if (isTextCorrect) {
        let [searchedString, replacementString] = substring.split(' ');

        while (decreptedString.includes(searchedString)) {
            decreptedString = decreptedString.replace(searchedString, replacementString);
        }
        console.log(decreptedString);
        
    } else {
        console.log('This is not the book you are looking for.');
    }
}
deciphering(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an']);
deciphering(['arx#vkdww#qrw#sdvv', 't l']);