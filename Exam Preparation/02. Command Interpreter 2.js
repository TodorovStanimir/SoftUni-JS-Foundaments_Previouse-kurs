function commandInterpreter(input) {

    function areValidStartIndexAndCount(index, count, forCheking) {
        return (index < 0 || index + count > forCheking.length || count < 0 || index === forCheking.length)
            ? false
            : true
    }

    let collection = input.shift().split(' ').filter(el => el !== '');
    for (let line of input) {
        if (line === 'end') {
            break;
        }
        if (line.includes('reverse')) {
            let [, , startIndex, , count] = line.split(' ').map(Number);
            if (areValidStartIndexAndCount(startIndex, count, collection)) {
                let reversedPart = collection.slice(startIndex, startIndex + count).reverse();
                collection.splice(startIndex, count, ...reversedPart);
            } else {
                console.log('Invalid input parameters.');
            }
        } else if (line.includes('sort')) {
            let [, , startIndex, , count] = line.split(' ').map(Number);
            if (areValidStartIndexAndCount(startIndex, count, collection)) {
                let sortedPart = collection.slice(startIndex, startIndex + count).sort((a, b) => a.localeCompare(b));
                collection.splice(startIndex, count, ...sortedPart);
            } else {
                console.log('Invalid input parameters.');
            }
        } else if (line.includes('roll')) {
            let [command, count] = line.split(' ');
            count = Number(count) % collection.length;
            if (areValidStartIndexAndCount(0, count, collection)) {
                if (command === 'rollLeft') {
                    for (let counter = 1; counter <= count; counter++) {
                        let elem = collection.shift();
                        collection.push(elem);
                    }
                } else if (command === 'rollRight') {
                    for (let counter = 1; counter <= count; counter++) {
                        let elem = collection.pop();
                        collection.unshift(elem);
                    }
                }
            } else {
                console.log('Invalid input parameters.');
            }
        }
    }

    console.log(`[${collection.join(', ')}]`);
}
commandInterpreter(['1   2   5 8   7 3 10 6 4 9',
    'reverse from 2 count 4',
    'rollLeft 3 times',
    'sort from 7 count 3',
    'end'
]);
commandInterpreter(['1 2 5 8 7 3 10 6 4 9',
    'sort from 0 count 7',
    'end'
])
commandInterpreter(['1 2 3 4  5',
    'rollLeft 3 times',
    'end'
])
commandInterpreter(['1 2 3 4 5',
    'rollRight 1 times',
    'end'
])
commandInterpreter(['1 2 3 4 5',
    'sort from -1 count 2',
    'sort from 0 count -1',
    'reverse from 5 count 1',
    'end'
]);
commandInterpreter(['a b c',
    'rollRight 2000000000 times',
    'end'
])