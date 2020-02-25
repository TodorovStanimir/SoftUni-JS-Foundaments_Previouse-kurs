cubicMessages = (input) => {
    for (let i = 0; i < input.length; i += 2) {
        let string = input[i];
        let len = parseInt(input[i + 1]);
        if (string === 'Over!') {
            break;
        }
        let pattern = /^(?<before>[\d]+)(?<message>[A-Za-z]+)(?<after>[!"#$%&'()*+,\-./:;<=>?@[\\\]^_` {|}~0-9]+)$/g;
        if (string.match(pattern)) {
            let currentItems = pattern.exec(string);
            if (currentItems.groups.message.length === len) {
                let indexes = [];

                indexes.push(...currentItems.groups.before.split('').map(Number))
                currentItems.groups.after
                    .split('')
                    .forEach(el => {
                        if (0 <= el && el <= 9) {
                            indexes.push(Number(el));
                        }
                    })
                
                let message = currentItems.groups.message;
                let decreptedMessage = [];
                indexes.forEach(ind => {
                    if (ind >= 0 && ind < message.length) {
                        decreptedMessage.push(message[ind]);
                    } else {
                        decreptedMessage.push(' ');
                    }
                });
                decreptedMessage = decreptedMessage.join('');
                console.log(`${message} == ${decreptedMessage}`);
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