function reverseAnArrayOfNumbers(arg1, arg2) {
    let arr = [];
    let output = '';
    for (let i = arg1 - 1; i >= 0; i--) {
        arr.push(arg2[i]);
    }
    console.log(arr.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])