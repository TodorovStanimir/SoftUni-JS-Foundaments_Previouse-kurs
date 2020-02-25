function printAndSum(arg1, arg2) {
    let sum = 0;
    let output = '';
    for (let i = arg1; i <= arg2; i++) {
        output += i + ' ';
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
printAndSum(0, 26)