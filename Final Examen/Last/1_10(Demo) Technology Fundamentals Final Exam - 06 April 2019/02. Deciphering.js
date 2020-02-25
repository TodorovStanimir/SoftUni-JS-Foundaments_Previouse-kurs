function deciphering([encriptedString, substring]) {
    let patter = /[d-z{}|#]/g;
    if (encriptedString===encriptedString.match(patter).join('')) {
        let decriptedString = encriptedString.split('').map(el => String.fromCharCode(el.charCodeAt() - 3)).join('');
        let [string, replacement] = substring.split(' ');
        decriptedString = decriptedString.replace(new RegExp(string, 'g'), replacement);
        console.log(decriptedString);
    } else {
        console.log('This is not the book you are looking for.')
    }
}
deciphering(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an']);
deciphering(['arx#vkdww#qrw#sdvv', 't l']);