function theIsleOfManTTRace(input) {
    for (let i = 0; i < input.length; i++) {

        let nameOfRacer = '';
        let lengthOfGeohashcode = 0;
        let encryptedGeohashCode = '';
        let geohashCode = '';

        let currentRacer = input[i];
        let beginingFinishingName = 0;
        let indexOflengthOfGeohashcode = 0;

        for (let i = 0; i < currentRacer.length; i++) {
            if (currentRacer[i] === '#' ||
                currentRacer[i] === '$' ||
                currentRacer[i] === '%' ||
                currentRacer[i] === '*' ||
                currentRacer[i] === '&') {
                beginingFinishingName++;
            }
            if (beginingFinishingName === 2 && currentRacer[i + 1] === '=') {
                indexOflengthOfGeohashcode = i + 1;
                break;
            }
        }

        let indexOfEncryptedGeohashCode = 0;

        for (let i = currentRacer.length; i > indexOflengthOfGeohashcode; i--) {
            if (currentRacer[i] === "!" && currentRacer[i - 1] === "!") {
                indexOfEncryptedGeohashCode = i;
            }
        }
        let isCorrectMessage = true;
        if (indexOflengthOfGeohashcode >= indexOfEncryptedGeohashCode) {
            isCorrectMessage = false
        } else {
            nameOfRacer = currentRacer.substring(0, indexOflengthOfGeohashcode);
            lengthOfGeohashcode = Number(currentRacer.substring(indexOflengthOfGeohashcode + 1, (indexOfEncryptedGeohashCode - 1)));
            encryptedGeohashCode = currentRacer.substr(indexOfEncryptedGeohashCode + 1, currentRacer.length)
        }
        if (nameOfRacer[0] !== nameOfRacer[nameOfRacer.length - 1] ||
            (nameOfRacer[0] !== '#' && nameOfRacer[0] !== '$' && nameOfRacer[0] !== '%' && nameOfRacer[0] !== '*' && nameOfRacer[0] !== '&') ||
            encryptedGeohashCode.length !== Number(lengthOfGeohashcode)) {
            isCorrectMessage = false;
        } else {
            nameOfRacer = nameOfRacer.substr(1, nameOfRacer.length - 2);
            for (let o = 0; o < nameOfRacer.length; o++) {
                if (nameOfRacer.charCodeAt(o) < 65 || (nameOfRacer.charCodeAt(o) >90 && nameOfRacer.charCodeAt(o) < 97) || nameOfRacer.charCodeAt(o) > 122) {
                    isCorrectMessage = false;
                    break;
                }
            }
            for (let z = 0; z < encryptedGeohashCode.length; z++) {
                let currentPosition = String.fromCharCode((encryptedGeohashCode.charCodeAt(z) + lengthOfGeohashcode));
                geohashCode += currentPosition;
            }
        }

        if (isCorrectMessage === true) {
            console.log(`Coordinates found! ${nameOfRacer} -> ${geohashCode}`);
            break;
        } else
            console.log('Nothing found!');

    }
}
theIsleOfManTTRace(["#SteveHislop#=16!!df%TU[Tj(h!!TT[S"])
// theIsleOfManTTRace(["Ian6Hutchinson=7!!\(58ycb4",
//     "#MikeHailwood#!!'gfzxgu6768=11",
//     "slop%16!!plkdek/.8x11ddkc",
//     "$Steve$=9Hhffjh",
//     "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
//     "RichardQ^uayle=16!!fr5de5kd"

// ])