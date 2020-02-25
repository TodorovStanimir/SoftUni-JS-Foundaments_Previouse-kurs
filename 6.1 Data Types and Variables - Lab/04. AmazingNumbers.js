function AmazingNumbers(num) {
    let num1 = num;
    let result = 0;

    while (num1 > 0) {
        result += num1 % 10;
        num1 = parseInt(num1 / 10);
    }
    let is9 = result.toString().includes('9');
    console.log(is9 ? `${num} Amazing? True` : `${num} Amazing? False`);
}
AmazingNumbers(1233)
AmazingNumbers(999)