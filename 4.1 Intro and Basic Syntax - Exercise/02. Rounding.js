function Rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(Number(number.toFixed(precision)));
}
Rounding(3.1415926535897932384626433832795, 2)
Rounding(10.5, 3)