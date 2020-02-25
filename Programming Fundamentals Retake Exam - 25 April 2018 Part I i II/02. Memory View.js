function memoryView(input) {

    let inputArray = [];

    while ((line = input.shift()) != 'Visual Studio crash') {
        line
            .split(' ')
            .map(Number)
            .forEach(element => {
                inputArray.push(element);
            });;
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 32656 && inputArray[i + 1] === 19759 && inputArray[i + 2] === 32763) {
            let lengthOfString = inputArray[i + 4];
            let indexOfCounter = i + 4;
            let startIndexOfString = 1;
            while (inputArray[indexOfCounter + startIndexOfString] === 0) {
                startIndexOfString++;
            }
            let foundedString = '';
            startIndexOfString += indexOfCounter;
            for (let z = startIndexOfString; z < startIndexOfString + lengthOfString; z++) {
                foundedString += String.fromCharCode(inputArray[z]);
            }
            console.log(foundedString);
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