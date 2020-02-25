function pthBit(operant, numberOfBit) {

    operant = operant >> numberOfBit;

    let bitAtPosition1 = operant & 1;
    
    console.log(bitAtPosition1);
}
pthBit(2145, 5);
pthBit(512, 0);
pthBit(111, 8);
pthBit(255, 7)