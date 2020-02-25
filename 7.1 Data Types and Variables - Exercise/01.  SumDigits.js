function SumDigits(arg) {
    let num = arg;
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    console.log(sum);

}
SumDigits(245678)
SumDigits([97561])
SumDigits([543])