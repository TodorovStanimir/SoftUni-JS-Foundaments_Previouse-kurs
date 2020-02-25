function solve(num) {
    let i = 1;
    let sumOdd = 0;
    while (num > 0) {
        if (i % 2 != 0) {
            console.log(i);
            sumOdd += i;
            num--;
        }
        i++
    }
    console.log(`Sum: ${sumOdd}`);
}
solve(1)