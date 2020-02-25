function printNthElement(input) {
    let n = Number(input[input.length - 1]);
    let output = []
    for (let i = 0; i < input.length - 1; i+=n) {
        output.push(input[i])
    }
    console.log(output.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])