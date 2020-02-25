portal = (input) => {
    let sizeMatrix = parseInt(input.shift());

    let matrix = [];
    let r = 0;
    let c = 0;
    for (let i = 0; i < sizeMatrix; i++) {
        let row = []
        let initialRow = input.shift().split('');
        for (let y = 0; y < sizeMatrix; y++) {
            if (initialRow[y] === 'O') {
                row.push('O');
            } else if (initialRow[y] === 'S') {
                row.push('S');
                r = i;
                c = y;
            } else if (initialRow[y] === 'E') {
                row.push('E');
            } else {
                row.push(' ');
            }
        }
        matrix.push(row)
    }

    let currPoss = matrix[r][c];
    let directions = input.shift().split('');
    let counter = 0;
    let experimentSuccessfull = false;

    for (let direction of directions) {
        counter++;
        if (direction === 'R') {
            c++;
            if (c === sizeMatrix) {
                c = 0;
            }
            while (matrix[r][c] === ' ') {
                c++;
                if (currPoss === sizeMatrix) {
                    c = 0;
                }
            }
            currPoss = matrix[r][c];
        }
        if (direction === 'L') {
            c--;
            if (c === -1) {
                c = sizeMatrix - 1;
            }
            while (matrix[r][c] === ' ') {
                c--;
                if (c === -1) {
                    c = sizeMatrix - 1;
                }
            }
            currPoss = matrix[r][c];
        }
        if (direction === 'D') {
            r++;
            if (r === sizeMatrix) {
                r = 0;
            }
            while (matrix[r][c] === ' ') {
                r++;
                if (r === sizeMatrix) {
                    r = 0;
                }
            }
            currPoss = matrix[r][c];
        }
        if (direction === 'U') {
            r--;
            if (r === -1) {
                r = sizeMatrix - 1
            }
            while (matrix[r][c] === ' ') {
                r--;
                if (r === -1) {
                    r = sizeMatrix - 1;
                }
            }
            currPoss = matrix[r][c];
        }
        if (currPoss === 'E') {
            experimentSuccessfull = true;
            break;
        }
    }

    if (experimentSuccessfull) {
        console.log(`Experiment successful. ${counter} turns required.`);
    } else {
        console.log(`Robot stuck at ${r} ${c}. Experiment failed.`);
    }
}
portal(['3', 'OOO', 'OSO', 'OOE', 'DR'])
portal(['5', 'OOOOS', 'OOOO', 'OO', 'OOOOO', 'OOOOE', 'DLUU'])
// portal(['1', 'OSE', 'RLR'])