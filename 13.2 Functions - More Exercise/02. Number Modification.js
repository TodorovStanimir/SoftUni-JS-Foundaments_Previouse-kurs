function numberModification(input) {
    let averageValueOfDigits = 0;
    let num = input;
    let sumOfDigits = 0;
    let output = String(num);
    while (averageValueOfDigits < 5) {
        while (num > 0) {
            let edinica = num % 10;
            sumOfDigits += edinica;
            num = Math.floor(num / 10);
        }
        averageValueOfDigits = sumOfDigits / output.length;
        sumOfDigits = 0;
        output += '9'
        num = Number(output);
    }
    output=output.substr(0,output.length-1);
    console.log(output);
}
numberModification(101);
numberModification(5835);