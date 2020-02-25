function stringManipulator(input) {
    let result = '';
    for (let line of input) {
        if (line === 'End') {
            break;
        } else if (line.startsWith('Add ')) {
            result = result.concat(line.split(' ')[1])
        } else if (line.startsWith('Print')) {
            console.log(result);
        } else if (line.startsWith('Upgrade ')) {
            let char = line.split(' ')[1];
            result = result.replace(new RegExp(`${char}`, 'g'), String.fromCharCode(char.charCodeAt(0) + 1));
        } else if (line.startsWith('Index ')) {
            let char = line.split(' ')[1];
            let indexes = [];
            for (let index in result) {
                if (result[index] === char) {
                    indexes.push(index);
                }
            }
            console.log(indexes.length > 0 ? `${indexes.join(' ')}` : 'None');
        } else if (line.startsWith('Remove ')) {
            let string = line.split(' ')[1];
            result = result.replace(new RegExp(`${string}`, 'g'), '');
        }
    }
}
stringManipulator(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End'])