anonymousThreat = (input) => {
    let output = input.shift().split(' ');
    while ((line = input.shift()) !== '3:1') {
        if (line.includes('merge')) {
            let lineArray = line.split(' ').map(Number);
            let startIndex = lineArray[1];
            let endIndex = lineArray[2];
            if (startIndex < 0) {
                startIndex = 0;
            }
            if (endIndex > output.length - 1) {
                endIndex = output.length - 1;
            }
            let newString = ''
            for (let index = startIndex; index <= endIndex; index++) {
                newString = newString.concat((output[index]));
            }
            output.splice(startIndex, (endIndex - startIndex + 1), newString);
        } else if (line.includes('divide')) {
            let lineArray = line.split(' ').map(Number);
            let index = lineArray[1];
            let partitions = parseInt(lineArray[2]);
            let stringForDividing = output[index];
            let currentArray = [];
            if (stringForDividing.length % partitions === 0 && partitions !== 0) {
                let lengthDividing = stringForDividing.length / partitions;
                for (let i = 0; i < partitions; i++) {
                    currentArray.push(stringForDividing.substr(i * lengthDividing, lengthDividing));
                }
            } else {
                let lengthDividing = 1;
                let currentDividing = 0;
                partitions = Math.floor(stringForDividing.length - 2);
                let lengthLast = 2
                while (lengthDividing < stringForDividing.length) {
                    currentDividing++
                    if ((stringForDividing.length - stringForDividing.length % currentDividing) / currentDividing >= 2 &&
                        lengthLast < stringForDividing.length % currentDividing) {
                        lengthLast = stringForDividing.length % currentDividing
                        lengthDividing = currentDividing;
                        partitions = (stringForDividing.length - stringForDividing.length % currentDividing) / currentDividing;
                    }
                    if (currentDividing >= stringForDividing.length / 2) {
                        break;
                    }
                }
                for (let i = 0; i < partitions; i++) {
                    currentArray.push(stringForDividing.substr(i * lengthDividing, lengthDividing))
                }
                currentArray.push(stringForDividing.substr(lengthDividing * partitions, lengthLast));
            }
            for (let i = 0; i < currentArray.length; i++) {
                if (i === 0) {
                    output.splice(index, 1, currentArray[i]);
                } else {
                    output.splice(index + i, 0, currentArray[i]);
                }
            }
        }
    }
    console.log(output.join(' '));
}
anonymousThreat(['Ivo Johny Tony Bony Mony',
    'merge 0 3',
    'merge 3 4',
    'merge 0 3',
    '3:1'
]);
anonymousThreat(['abcd efgh ijkl mnop qrst uvwx yz',
    'merge 4 10',
    'divide 4 5',
    '3:1'
]);