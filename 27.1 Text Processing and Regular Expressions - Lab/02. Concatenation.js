function concatenation(input) {
    let output = '';
    input.forEach(element => {
        output += element
    });
    console.log(output);
}
concatenation(["First", "Second", "Third"])
concatenation([2, 3, 4])