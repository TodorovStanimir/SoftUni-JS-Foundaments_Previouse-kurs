function firstBit(input) {
    let n = Number(input);
    let bitAtPosition1 = 1;

    n = n >> bitAtPosition1;
    console.log(n & 1);
}
firstBit(13)