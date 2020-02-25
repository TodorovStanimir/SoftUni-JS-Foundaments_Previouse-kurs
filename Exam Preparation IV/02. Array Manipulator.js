arrayManipulator = (input) => {
    let myArray = input.shift().split(' ').map(Number);

    while ((line = input.shift()) !== 'end') {
        if (line.includes('exchange')) {
            let index = Number(line.split(' ')[1]);
            if (0 <= index && index < myArray.length) {
                let firstHalf = myArray.slice(0, index + 1);
                let secondHalf = myArray.slice(index + 1, myArray.length);
                myArray = secondHalf.concat(firstHalf);
            } else {
                console.log('Invalid index');
            }
        } else if (line.includes('max')) {
            let kindOfNumber = String(line.split(' ')[1]);
            let maxNumber = Number.MIN_SAFE_INTEGER;
            let indexMaxNumber = Number.MIN_SAFE_INTEGER;
            if (kindOfNumber === 'even') {
                myArray.forEach((element, index) => {
                    if (element % 2 === 0 && element >= maxNumber) {
                        indexMaxNumber = index;
                        maxNumber = element;
                    }
                });
            } else if (kindOfNumber === 'odd') {
                myArray.forEach((element, index) => {
                    if (element % 2 !== 0 && element >= maxNumber) {
                        indexMaxNumber = index;
                        maxNumber = element;
                    }
                });
            }
            if (indexMaxNumber !== Number.MIN_SAFE_INTEGER) {
                console.log(indexMaxNumber);
            } else {
                console.log('No matches');
            }
        } else if (line.includes('min')) {
            let kindOfNumber = String(line.split(' ')[1]);
            let minNumber = Number.MAX_SAFE_INTEGER;
            let indexMinNumber = Number.MAX_SAFE_INTEGER;
            if (kindOfNumber === 'even') {
                myArray.forEach((element, index) => {
                    if (element % 2 === 0 && element <= minNumber) {
                        indexMinNumber = index;
                        minNumber = element;
                    }
                });
            } else if (kindOfNumber === 'odd') {
                myArray.forEach((element, index) => {
                    if (element % 2 !== 0 && element <= minNumber) {
                        indexMinNumber = index;
                        minNumber = element;
                    }
                });
            }
            if (indexMinNumber !== Number.MAX_SAFE_INTEGER) {
                console.log(indexMinNumber);
            } else {
                console.log('No matches');
            }
        } else if (line.includes('first')) {
            let numberOfElements = Number(line.split(' ')[1]);
            let kindOfNumber = line.split(' ')[2];
            let output = myArray.slice();
            if (numberOfElements > myArray.length) {
                console.log('Invalid count');
            } else {
                if (kindOfNumber === 'even') {
                    output = output.filter(x => x % 2 === 0);
                } else if (kindOfNumber === 'odd') {
                    output = output.filter(x => x % 2 !== 0)
                }
                if (output.length === 0) {
                    console.log('[]');
                } else {
                    output = output.slice(0, numberOfElements)
                    console.log(`[${output.join(', ')}]`);
                }
            }
        } else if (line.includes('last')) {
            let numberOfElements = Number(line.split(' ')[1]);
            let kindOfNumber = line.split(' ')[2];
            let output = myArray.slice().reverse();
            if (numberOfElements > myArray.length) {
                console.log('Invalid count');
            } else {
                if (kindOfNumber === 'even') {
                    output = output.filter(x => x % 2 === 0);
                } else if (kindOfNumber === 'odd') {
                    output = output.filter(x => x % 2 !== 0)
                }
                if (output.length === 0) {
                    console.log('[]');
                } else {
                    output = output.slice(0, numberOfElements)
                    output.reverse();
                    console.log(`[${output.join(', ')}]`);
                }
            }
        }
    }
    console.log(`[${myArray.join(', ')}]`);
}
// arrayManipulator(['1 3 5 7 9',
//     'exchange 1',
//     'max odd',
//     'min even',
//     'first 2 odd',
//     'last 2 even',
//     'exchange 3',
//     'end'
// ])
// arrayManipulator(['1 10 100 1000',
//     'max even',
//     'first 5 even',
//     'exchange 10',
//     'min odd',
//     'exchange 0',
//     'max even',
//     'min even',
//     'end'
// ])
arrayManipulator(['1 10 100 1000',
    'exchange 3',
    'first 2 odd',
    'last 4 odd',
    'end'
])