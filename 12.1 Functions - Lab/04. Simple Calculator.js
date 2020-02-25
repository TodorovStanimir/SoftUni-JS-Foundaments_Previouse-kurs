function simpleCalculator(numOne, numTwo, operator) {
    let result;
    switch (operator) {
        case 'multiply':
            result = (numOne, numTwo) => numOne * numTwo;
            break;
        case 'divide':
            result = (numOne, numTwo) => numOne / numTwo;
            break;
        case 'add':
            result = (numOne, numTwo) => numOne + numTwo;
            break;
        case 'subtract':
            result = (numOne, numTwo) => numOne - numTwo;
            break;
    }
    console.log(result(numOne, numTwo));
}
simpleCalculator(5, 5, 'add');
simpleCalculator(5, 5, 'subtract');