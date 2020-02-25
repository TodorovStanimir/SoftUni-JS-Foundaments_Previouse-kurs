function songEncryption(input) {
    let command = input.shift();
    while (command !== 'end') {
        let [artist, song] = command.split(':');
        let key = artist.length;
        if (artist.match(/^[A-Z]{1}[a-z ']+$/g) && song.match(/^[A-Z]{1}[A-Z\s]+$/g)) {
            console.log(`Successful encryption: ${encryptedFunction(artist, key)}@${encryptedFunction(song, key)}`)
        } else {
            console.log('Invalid input!')
        }
        command = input.shift();
    }

    function encryptedFunction(string, key) {
        let encryptString = string.split('').map(el => {
            let newValue = el.charCodeAt(0) + key;
            if (el === ' ' || el === '\'') {
                return el
            } else if ('A' <= el && el <= 'Z') {
                while (newValue > 90) {
                    newValue -= 26;
                }
                return String.fromCharCode(newValue);
            } else if ('a' <= el && el <= 'z') {
                while (newValue > 122) {
                    newValue -= 26;
                }
                return String.fromCharCode(newValue);
            }
        });
        return encryptString.join('');
    }
}
songEncryption(['Eminem:VENOM', 'Linkin park:NUMB', 'Drake:NONSTOP', 'Adele:HELLO', 'end']);
songEncryption(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end',
])