function hornetComm(input) {
    let patternMessage = /^([0-9]+) <-> ([0-9A-Za-z]+|[A-Za-z]+)$/g;
    let patternBroadcast = /^([^0-9]+) <-> ([A-Za-z0-9]+|[0-9]+)$/g;
    let broadcasts = [];
    let messages = [];

    for (let line of input) {
        if (line === 'Hornet is Green') {
            break;
        }
        if (line.match(patternMessage)) {
            let [recipientsCode, message] = line.split(' <-> ');
            recipientsCode = recipientsCode.split('').reverse().join('');
            messages.push(`${recipientsCode} -> ${message}`);
        }
        if (line.match(patternBroadcast)) {
            let message = line.substring(0, line.lastIndexOf(' <-> '));
            let frequency = line.substring(line.lastIndexOf(' <-> ')+5);
            frequency = frequency.split('').map(elem => {
                if (elem >= 'a' && elem <= 'z') {
                    return elem.toUpperCase();
                } else if (elem >= 'A' && elem <= 'Z') {
                    return elem.toLowerCase();
                } else {
                    return elem
                }
            }).join('')
            broadcasts.push(`${frequency} -> ${message}`);
        }
    }
    console.log('Broadcasts:')
    if (broadcasts.length > 0) {
        broadcasts.forEach(elem => {
            console.log(`${elem}`);
        });
    } else {
        console.log('None')
    }
    console.log('Messages:')
    if (messages.length > 0) {
        messages.forEach(elem => {
            console.log(`${elem}`);
        });
    } else {
        console.log('None')
    }
}
hornetComm(['213094 <-> BeeQueenDown',
    '213094 <-> Repeat',
    'Foxtrot <-> 123321',
    '213094 <-> BeeQueenDown',
    'Unicorn <-> 871203',
    'Charlie <-> 56210',
    'Kilo <-> 423211',
    'Hornet is Green',
    ''
]);
hornetComm(['<+>.<+> <-> az13b6',
    '<->.<-> <-> P2Z4x789',
    '12345 <-> Pr1v@teM3ssage',
    'Hornet is Green',
    ''
])