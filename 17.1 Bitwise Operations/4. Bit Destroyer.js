function bitDestroyer(operand, pbith) {
    let n = operand;
    let p = pbith;
    let mask=0;
    let newNumber=0;    ;

    
    mask = 1 << p;
    mask = ~mask;
    newNumber = n & mask;
    console.log(newNumber)
}
bitDestroyer(1313, 5);
bitDestroyer(231, 2);
bitDestroyer(111, 6);