function Calculator(arg1, arg2, arg3) {
    let num1 = arg1;
    let operator = String(arg2);
    let num2 = arg3;
    let result = 0;

    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else if (operator == '%') {
        result = num1 % num2;
    }
    console.log(result.toFixed(2));
}
Calculator(5, '+', 10)