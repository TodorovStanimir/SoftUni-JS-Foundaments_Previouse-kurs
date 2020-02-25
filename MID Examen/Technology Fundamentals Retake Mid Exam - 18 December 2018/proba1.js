function proba(arr) {
    let row = arr[0];
    let column = arr[1];
    let output = [];
    for (let i = 0; i < row; i++) {
        let line = [];
        for (let y = 0; y < column; y++) {
            line.push(0);
        }
        output.push(line)
    }

    let x = 0;
    let y = 0;
    let i = 1
    while (i <= row * column) {
        output[x][y] = i;
        
        if (x === column - 1) {
            y++
        }
    }
    console.log(output);

}
proba([5, 5]);
proba([
    3, 3
]);