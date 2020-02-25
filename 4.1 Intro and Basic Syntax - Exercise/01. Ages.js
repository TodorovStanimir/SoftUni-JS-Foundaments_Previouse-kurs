function Ages(arg) {
    let output = '';
    if (arg >= 0 && arg <= 2) {
        output = 'baby';
    } else if (arg > 2 && arg <= 13) {
        output = 'child';
    } else if (arg > 13 && arg <= 19) {
        output = 'teenager';
    } else if (arg > 19 && arg <= 65) {
        output = 'adult';
    } else if (arg >= 66) {
        output = 'elder';
    }
    console.log(output);
}
Ages(20)