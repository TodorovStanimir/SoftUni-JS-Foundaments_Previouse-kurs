function lastStop(input) {
    let result = input[0].split(' ').map(Number);

    for (let line = 1; line < input.length; line++) {
        let tokens = input[line].split(' ');
        let command = tokens.shift();
        tokens = tokens.map(Number);
        if (command === 'END') {
            break;
        }

        if (command === 'Change') {
            let paintingNumber = tokens[0];
            let changedNumber = tokens[1];
            let indexPaintingNumber = result.indexOf(paintingNumber)
            if (indexPaintingNumber !== -1) {
                result[indexPaintingNumber] = changedNumber;
            }
        } else if (command === 'Hide') {
            let paintingNumber = tokens[0];
            let indexPaintingNumber = result.indexOf(paintingNumber)
            if (indexPaintingNumber !== -1) {
                result.splice(indexPaintingNumber, 1)
            };
        } else if (command === 'Switch') {
            let paintingNumber = tokens[0];
            let paintingNumber2 = tokens[1];
            let indexPaintingNumber = result.indexOf(paintingNumber)
            let indexPaintingNumber2 = result.indexOf(paintingNumber2)
            if (indexPaintingNumber !== -1 && indexPaintingNumber2 !== -1) {
                result[indexPaintingNumber] = paintingNumber2;
                result[indexPaintingNumber2] = paintingNumber;
            }
        } else if (command === 'Insert') {
            let place = tokens[0] + 1;
            let paintingNumber = tokens[1];
            if (place >= 0 && place <= result.length) {
                result.splice(place, 0, paintingNumber);
            }
        } else if (command === 'Reverse') {
            result.reverse();
        }
    }
    console.log(result.join(' '));
}
lastStop(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'
]);
lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
])