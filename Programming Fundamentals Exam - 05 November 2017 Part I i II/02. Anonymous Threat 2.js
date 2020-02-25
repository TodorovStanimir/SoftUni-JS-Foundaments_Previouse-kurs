anonymousThreat = (input) => {
    let arr = input.shift().split(' ');
    for (let line of input) {
        if (line === '3:1') {
            break;
        }
        if (line.includes('merge')) {
            let [, startIndex, endIndex] = line.split(' ').map(Number);
            startIndex = Math.max(0, startIndex); //validating the startIndex
            endIndex = Math.min(endIndex, arr.length); //validating the endIndex
            let mergedPart = arr.splice(startIndex, endIndex + 1 - startIndex).join('');
            if (mergedPart !== '') {
                arr.splice(startIndex, 0, mergedPart)
            }
        } else {
            let [, index, partitions] = line.split(' ').map(Number);
            let partForDividin = arr[index];
            if (partForDividin.length % partitions === 0) {
                let regexp = new RegExp(`[\\w\\W]{${partForDividin.length / partitions}}`, 'gi');
                let newElements = partForDividin.match(regexp);
                arr.splice(index, 1, ...newElements)
            } else {
                let lengthPart = Math.floor(partForDividin.length / partitions); //calculate equal length of all parts, excluding last part
                let lengthLastPart = lengthPart + partForDividin.length % partitions; //calculate length of the last part, which have to be bigger than length of each previous part
                let newElements = [];
                for (let i = 0; i < partForDividin.length - lengthLastPart; i += lengthPart) {
                    newElements.push(partForDividin.slice(i, i + lengthPart));
                }
                newElements.push(partForDividin.slice(partForDividin.length - lengthLastPart))
                arr.splice(index, 1, ...newElements)
            }
        }
    }
    console.log(arr.join(' '));
}
anonymousThreat(['asd dsa fsd 1237 dsfkasd 123 5444',
    'merge 0 2',
    'merge 1 3',
    '3:1',
    '']);
anonymousThreat(['abcd efgh ijkl mnop qrst uvwx yz',
    'merge 4 10',
    'divide 4 5',
    '3:1'
]);