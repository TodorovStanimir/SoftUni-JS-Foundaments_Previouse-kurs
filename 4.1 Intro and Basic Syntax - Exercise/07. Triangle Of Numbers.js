function triangleOfNumbers(arg) {
    let output = '';
    for (let row = 1; row < arg + 1; row++) {
        for (let column = 0; column < row; column++) {
            output += row + ' ';
        }
        console.log(output);
        output = '';
    }
}
triangleOfNumbers(6)