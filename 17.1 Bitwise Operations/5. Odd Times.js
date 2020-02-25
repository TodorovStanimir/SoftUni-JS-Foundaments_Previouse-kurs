function oddTimes(input) {
    let inputArray = input.split(' ').map(Number);
    let result;
    for (let i of inputArray) {
        result = result ^ i;
    }
    console.log(result);

}
oddTimes('1 2 3 2 3 1 3');
oddTimes('5 7 2 7 5 2 5');
oddTimes('8 8 8 8 11 11 11 9 9 9 9');