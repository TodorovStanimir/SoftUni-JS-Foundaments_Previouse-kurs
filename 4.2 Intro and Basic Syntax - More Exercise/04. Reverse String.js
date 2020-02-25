function reverseString(arg) {
    let output = '';
    for (let i = arg.length; i >= 0; i--) {
        output += arg.charAt(i);
    }
    console.log(output);
}
reverseString('Hello');