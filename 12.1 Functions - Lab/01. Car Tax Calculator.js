function carTaxCalculator(kw) {
    let power = Number(kw);
    let tax = 0;
    if (power <= 37) {
        tax = 0.43 * power;
    } else if (37 < power && power <= 55) {
        tax = 0.50 * power;
    } else if (55 < power && power <= 74) {
        tax = 0.68 * power;
    } else if (74 < power && power <= 110) {
        tax = 1.38 * power;
    } else {
        tax = 1.54 * power;
    }
    tax=tax.toFixed(2);
    console.log(`${tax} lv.`)
}
carTaxCalculator(90);