function PoundstoDollars(arg) {
    let britishPounds = Number(arg);
    let USADolar = britishPounds * 1.31;
    console.log(USADolar.toFixed(3));
}
PoundstoDollars(39)