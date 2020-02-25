function binaryDigitsCount(input, binaryDigit) {
    let n=Number(input.toString(2));
    let countBinaryDigiit=0;
    while (n!=0){
        if (n%10===binaryDigit){
            countBinaryDigiit++
        }
        n=Math.floor(n/10);
    }
    console.log(countBinaryDigiit);
}
binaryDigitsCount(20, 0);
binaryDigitsCount(15, 1);
binaryDigitsCount(10, 0);
binaryDigitsCount(22527, 1);