function songEncryption(input) {
    let pattern = /^(?<artist>[A-Z][a-z' ]+):(?<song>[A-Z ]+)$/g;

    while ((line = input.shift()) !== 'end') {
        if (line.match(pattern)) {
            let rawResult = pattern.exec(line);
            let [artist, song] = [rawResult.groups.artist, rawResult.groups.song];
            let key = artist.length;
            let encryptedArtist = encription(artist, key);
            let encryptedSong = encription(song, key);
            console.log(`Successful encryption: ${encryptedArtist}@${encryptedSong}`);
        } else {
            console.log('Invalid input!');
        }
    }

    function encription(string, length) {
        let encriptedString = string.split('').map(element => {
            if (element === ' ' || element === '\'') {
                return element;
            } else if (element >= 'A' && element <= 'Z') {
                if ((element.charCodeAt() + length) > 90) {
                    return String.fromCharCode((element.charCodeAt() + length) % 90 + 64);
                } return String.fromCharCode(element.charCodeAt() + length);
            } else if (element >= 'a' && element <= 'z') {
                if ((element.charCodeAt() + length) > 122) {
                    return String.fromCharCode((element.charCodeAt() + length) % 122 + 96);
                } return String.fromCharCode(element.charCodeAt() + length)
            }
        }).join('')
        return encriptedString
    }
}
songEncryption(['Eminem:VENOM', 'Linkin park:NUMB', 'Drake:NONSTOP', 'Adele:HELLO', 'end']);
songEncryption(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end',
])