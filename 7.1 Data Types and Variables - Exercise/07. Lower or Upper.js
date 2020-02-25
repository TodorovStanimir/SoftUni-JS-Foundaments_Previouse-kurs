function LowerorUpper(arg) {
    let Str = String(arg);
    if (Str.charCodeAt() >= 65 && Str.charCodeAt() <= 90) {
        console.log('upper-case');
    } else if (Str.charCodeAt() >= 97 && Str.charCodeAt() <= 122) {
        console.log('lower-case');
    }
}
LowerorUpper('L')
LowerorUpper('f')