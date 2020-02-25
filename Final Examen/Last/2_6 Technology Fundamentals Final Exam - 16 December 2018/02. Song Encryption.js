function songEncryption(input) {
    let pattern = /^(?<artist>[A-Z][a-z' ]+):(?<song>[A-Z\s]+)$/g;
    for (let line of input) {
        if (line === 'end') {
            break;
        }
        if (line.match(pattern)) {
            let matched = pattern.exec(line);
            let key = matched.groups.artist.length;
            let encreptedInfo = `${matched.groups.artist}:${matched.groups.song}`.split('').map(char => {
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(65 + ((char.charCodeAt() + key) % 65) % 26)
                } else if (char >= 'a' && char <= 'z') {
                    return String.fromCharCode(97 + ((char.charCodeAt() + key) % 97) % 26)
                } else if (char === ':') {
                    return '@'
                } else {
                    return char;
                }
            }).join('')
            console.log(`Successful encryption: ${encreptedInfo}`);
        } else {
            console.log('Invalid input!')
        }

    }
}
songEncryption(['Eminem:VENOM', 'Linkin park:NUMB', 'Drake:NONSTOP', 'Adele:HELLO', 'end']);
songEncryption(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end',
])