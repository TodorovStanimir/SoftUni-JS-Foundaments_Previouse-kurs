cubicMessages = (input) => {
    let pattern = /^([0-9]+)([a-zA-z]+)([!"#$%&'()*+,\-./:;<=>?@[\\\]^_` {|}~0-9]+)$/g;

    while ((line = input.shift()) !== 'Over!') {
        let lengthOfMessage = parseInt(input.shift());
        let digitsBefore = '';
        let digitsAfter = '';
        let lineIsWrong = false;
        let messageStart = false;
        let message = '';

        let i = 0;
        if (0 <= line[0] && line[0] <= 9 && i === 0) {
            while (0 <= line[i] && line[i] <= 9) {
                digitsBefore += line[i]
                i++
            }
            messageStart = true;
        } else {
            lineIsWrong = true;
        }
        if (messageStart && digitsBefore !== '') {
            for (let a = 0; a < lengthOfMessage; a++) {
                if ('a' <= line[i].toLowerCase() && line[i].toLowerCase() <= 'z') {
                    message += line[i];
                    i++
                } else {
                    lineIsWrong = true;
                    i++
                    break;
                }
            }

            messageStart = false;
        }
        if (message !== '' && digitsBefore !== '' && !lineIsWrong) {
            while (i < line.length) {
                if ('a' <= line[i].toLowerCase() && line[i].toLowerCase() <= 'z') {
                    lineIsWrong = true;
                }
                if (0 <= Number(line[i]) && Number(line[i]) <= 9) {
                    digitsAfter += line[i];
                }
                i++;
            }
        }

        if (!lineIsWrong) {

            digitsBefore = digitsBefore.split('').map(Number);
            digitsAfter = digitsAfter.split('').map(Number);
            let foundMessage = message;

            let verificationCode = [];
            digitsBefore.forEach(digit => {
                if (0 <= digit && digit < foundMessage.length) {
                    verificationCode.push(foundMessage[digit]);
                } else {
                    verificationCode.push(' ');
                }
            });
            digitsAfter.forEach(digit => {
                if (0 <= digit && digit < foundMessage.length) {
                    verificationCode.push(foundMessage[digit]);
                } else {
                    verificationCode.push(' ');
                }
            });
           
                console.log(`${foundMessage} == ${verificationCode.join('')}`);
           
        }
    }
}

cubicMessages(['1234test4321',
    4,
    '0000oooo0000',
    4,
    'Over!'
]);
cubicMessages(['1wat!',
    3,
    '#23asd33',
    3,
    '333asd3a',
    3,
    '100dun2',
    3,
    'Over!'
])