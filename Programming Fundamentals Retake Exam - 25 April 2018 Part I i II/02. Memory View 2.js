function memoryView(input) {
    let inputarr = [];
    while ((line = input.shift()) !== 'Visual Studio crash') {
        inputarr.push(...line.split(' ').map(Number));
    }
    for (let ind = 0; ind < inputarr.length; ind++) {
        if (inputarr[ind] === 32656 && inputarr[ind + 1] === 19759 && inputarr[ind + 2] === 32763) {
            let length = inputarr[ind + 4];
            let currentString = '';
            for (let i = ind + 6; i < ind + 6 + length; i++) {
                currentString+=String.fromCharCode(inputarr[i]);
            }
            console.log(currentString);
            ind += 5 + length;
        }
    }
}
memoryView(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0',
    'Visual Studio crash'
]);
memoryView(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
    'Visual Studio crash'
]);