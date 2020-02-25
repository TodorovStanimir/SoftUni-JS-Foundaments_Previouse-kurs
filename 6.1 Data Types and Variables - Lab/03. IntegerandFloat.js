function IntegerandFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;
    let type = '';
    if (result % 1 === 0) {
        type = 'Integer';
    } else {
        type = 'Float';
    }
    console.log(`${result} - ${type}`);
}
IntegerandFloat(9, 100, 1.1)
IntegerandFloat(100, 200, 303)