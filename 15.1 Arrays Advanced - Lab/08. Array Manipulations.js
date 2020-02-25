function arrayManipulations(input) {

    let arrayOfNumbers=(input.shift().split(' ').map(Number));

    for (let i=0; i<input.length; i++){
        let [command, firstElement, secondElement] = input[i].split(' ');
        let firstNum=Number(firstElement);
        let secondNum=Number(secondElement);
            switch (command) {
                case 'Add':
                    arrayOfNumbers.push(firstNum);
                    break;
                case 'Remove':
                    arrayOfNumbers=arrayOfNumbers.filter(el => el !== firstNum);
                    break;
                case 'RemoveAt':
                    arrayOfNumbers.splice(firstNum, 1);
                    break;
                case 'Insert':
                    arrayOfNumbers.splice(secondNum, 0, firstNum);
                    break;
        }
    }
    console.log(arrayOfNumbers.join(' '));
}
arrayManipulations(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);