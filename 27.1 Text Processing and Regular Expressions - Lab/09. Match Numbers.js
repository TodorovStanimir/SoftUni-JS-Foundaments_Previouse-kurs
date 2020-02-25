function matchNumbers(input) {
    let pattern = /(?<=\s|^)-?\d+(\.\d+)?(?=\s|$)/g;
    let validNumbers = [];
    while ((validNumber = pattern.exec(input)) !== null) {
        validNumbers.push(validNumber[0])
    }
    console.log(validNumbers.join(' '));
}
matchNumbers("1 -1 1s 123 s-s -123 _55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5");