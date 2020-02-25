function SpiceMustFlow(arg) {
    let spice = parseInt(arg);
    let extractedSpice = 0;
    let countDays = 0;
    while (spice >= 100) {
        countDays++;
        extractedSpice += spice;
        extractedSpice -= 26;
        spice -= 10;
    }
    if (extractedSpice < 26) {
        extractedSpice = 0;
    } else {
        extractedSpice -= 26;
    }
    console.log(countDays);
    console.log(extractedSpice);
}
SpiceMustFlow(111)