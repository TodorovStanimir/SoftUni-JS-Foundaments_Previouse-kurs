function postOffice(input) {
    let [firstPart, secondPart, thirdPart] = input.shift().split('|');
    let letters = /([#\$%\*&]{1})(?<letters>[A-Z]+)\1/g.exec(firstPart).groups.letters.split('');
    let lengthWords = [];
    letters.forEach(letter => {
        let pattern = new RegExp(`${letter.charCodeAt()}:(?<length>[0][0-9]|[1][0-9]|[2][0])`, 'g');
        if (secondPart.match(pattern)) {
            lengthWords.push(Number(secondPart.match(pattern)[0].split(':')[1]) + 1);
        }
    });
    letters.forEach((letter, index) => {
        let pattern = new RegExp(`^${letter}[^ ]{${lengthWords[index] - 1}}$`, 'g');
        thirdPart.split(' ').forEach(word => {
            if (word.match(pattern)) {
                console.log(word);
            }
        })
    })
}
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])