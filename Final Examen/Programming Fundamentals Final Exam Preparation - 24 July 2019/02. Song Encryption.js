function songEncryption(input) {
    let pattern = /^(?<artist>[A-Z][a-z' ]+):(?<song>[A-Z ]+)$/g;
    while ((line = input.shift()) !== 'end') {
        if (line.match(pattern)) {
            let matchedLine = pattern.exec(line);
            let key = matchedLine.groups.artist.length;
            let decreptedMEssage = line.split('').map(el => {
                if (el >= 'a' && el <= 'z') {
                    return (String.fromCharCode(97 + ((el.charCodeAt(0) + key) % 97) % 26))
                } else if (el >= 'A' && el <= 'Z') {
                    return (String.fromCharCode(65 + ((el.charCodeAt(0) + key) % 65) % 26))
                } else if (el === ':') {
                    return '@'
                } else { return el }
            }).join('')
            console.log(`Successful encryption: ${decreptedMEssage}`);
        } else {
            console.log('Invalid input!');
        }
    }
}
songEncryption(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end']);
songEncryption(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end']
);