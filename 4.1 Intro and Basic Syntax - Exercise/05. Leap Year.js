function LeapYear(arg) {
    if ((arg % 4 == 0 && arg % 100 != 0) || arg % 400 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
LeapYear(1984)
LeapYear(2003)
LeapYear(4)