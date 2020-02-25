cubicMessages = (input) => {
    let pattern = /^([0-9]+)([a-zA-z]+)([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9]+)$/g;

    while ((line = input.shift()) !== 'Over!') {
        let lengthOfMessage = parseInt(input.shift());
        while ((message = pattern.exec(line)) !== null) {
            let digitsBefore = message[1].split('').map(Number);
            let digitsAfter = message[3].split('').map(Number);
            let foundMessage = message[2];
            if (foundMessage.length === lengthOfMessage) {
                let verificationCode = '';
                digitsBefore.forEach(digit => {
                    if (0 <= digit && digit < foundMessage.length) {
                        verificationCode += foundMessage[digit]
                    } else {
                        verificationCode += ' ';
                    }
                });
                digitsAfter.forEach(digit => {
                    if (0 <= digit && digit < foundMessage.length) {
                        verificationCode += foundMessage[digit]
                    } else {
                        verificationCode += ' ';
                    }
                });
                console.log(`${foundMessage} == ${verificationCode}`);
            }
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