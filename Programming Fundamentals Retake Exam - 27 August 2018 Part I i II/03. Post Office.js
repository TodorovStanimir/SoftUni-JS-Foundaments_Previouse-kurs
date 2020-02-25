function postOffice(input) {
    let [word1, word2, word3] = String(input.shift()).split('|');
    let wordFirst = ''
    let patternFirstPart = /([#\$%\*&])([A-Z]+)\1/g;
    wordFirst = word1.match(patternFirstPart)[0].substring(1, word1.match(patternFirstPart)[0].length - 1);
    
    wordFirst = wordFirst.split('');
    let wordSecond = word2.match(/[\d]{2}:[\d]{2}/g);
    let lengthWord1 = [];
    for (let index in wordFirst) {
        for (let i = 0; i < wordSecond.length; i++) {
            let [charCode, dalzhina] = String(wordSecond[i]).split(':');
            if (wordFirst[index] === String.fromCharCode(charCode)) {
                if (1 <= Number(dalzhina) && Number(dalzhina) <= 20) {
                    lengthWord1.push(Number(dalzhina));
                    break;
                }
            }
        }
    }
    let wordThird = word3.split(' ');
    for (let y = 0; y < wordFirst.length; y++) {
        for (let i = 0; i < wordThird.length; i++) {
            if (String(wordThird[i])[0] === wordFirst[y] && Number(wordThird[i].length) === Number(lengthWord1[y])+1) {
                console.log(wordThird[i]);
                
            }
        }
    }
}
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])