function Division(arg) {
    let devider = 0;

    if (arg % 2 == 0) {
        devider = 2;
    }
    if (arg % 3 == 0) {
        devider = 3;
    }
    if (arg % 6 == 0) {
        devider = 6;
    }
    if (arg % 7 == 0) {
        devider = 7;
    }
    if (arg % 10 == 0) {
        devider = 10;
    }

    if (devider != 0) {
        console.log(`The number is divisible by ${devider}`);
    } else {
        console.log("Not divisible");
    }
}
Division(2)