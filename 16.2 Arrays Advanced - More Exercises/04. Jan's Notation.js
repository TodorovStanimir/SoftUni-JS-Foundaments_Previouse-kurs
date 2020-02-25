function jansNotation(input) {
    let currentItem = input.shift();
    let operands = [];
    let operator = '';
    let result=0;
    let operand2 = 0;
    let operand1 = 0;
    while (currentItem !== undefined) {
        if (typeof currentItem === "string") {
            operator = currentItem;
            operand2 = operands.pop();
            operand1 = operands.pop();
            if (operand1===undefined || operand2===undefined){
                break;
            }
            switch (operator) {
                case "+":
                    result = operand1 + operand2;
                    operands.push(result);
                    break;
                case "-":
                    result = operand1 - operand2;
                    operands.push(result);
                    break;
                case "*":
                    result = operand1 * operand2;
                    operands.push(result);
                    break;
                case "/":
                    result = operand1 / operand2;
                    operands.push(result);
                    break;
            }
        } else if (typeof currentItem === "number") {
            operands.push(currentItem);
        }
        currentItem = input.shift();
    }
    if (operand1===undefined || operand2===undefined){
        console.log('Error: not enough operands!')
    } else if (operands.length>1 && operand1!==undefined && operand2!==undefined){
        console.log('Error: too many operands!');

    } else {
        console.log(operands[0]);
    }
}
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([3, 4, "+"]);
jansNotation([7,33,8,'-']);
jansNotation([15,'/'])