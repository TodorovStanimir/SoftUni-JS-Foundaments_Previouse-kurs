function hornetComm(input) {
    let privateMessages = [];
    let broadcasts = [];
    let counter = 0;
    while ((line = input.shift()) !== 'Hornet is Green') {
        counter++;
        if (counter > 1000) {
            break;
        }
        let [firstQuery, secondQuery] = line.split(' <-> ');
        let patternNumbers = /^[\d]+$/g;
        let patternNumbersAndLetters = /^([0-9a-zA-Z]+[^_ ])$/g;
        let patternEverythingWithoudNums = /^[^0-9]+$/g;

        if (firstQuery.match(patternNumbers) && secondQuery.match(patternNumbersAndLetters)) {
            firstQuery = firstQuery.split('').reverse().filter(a => a !== '').join('');
            privateMessages.push(`${firstQuery} -> ${secondQuery}`);
        } else if (firstQuery.match(patternEverythingWithoudNums) && secondQuery.match(patternNumbersAndLetters)) {
            let frequency = [];
            firstQuery = firstQuery.split('').filter(a => a !== '').join('');
            let arr = secondQuery.split('').filter(a => a !== '');
            arr.forEach((element, index) => {
                if (element >= 'a' && element <= 'z') {
                    frequency.push(element.toUpperCase());
                } else if (element >= 'A' && element <= 'Z') {
                    frequency.push(element.toLowerCase());
                } else {
                    frequency.push(element);
                }
                if (index === secondQuery.length - 1 && frequency.length > 0 && firstQuery.length > 0) {
                    frequency = frequency.join('');
                    broadcasts.push(`${frequency} -> ${firstQuery}`);
                }
            });

        }
    }
    console.log('Broadcasts:');
    if (broadcasts.length > 0) {
        broadcasts.forEach(message => console.log(message));
    } else {
        console.log('None');
    }
    console.log('Messages:');
    if (privateMessages.length > 0) {
        privateMessages.forEach(message => console.log(message));
    } else {
        console.log('None');
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