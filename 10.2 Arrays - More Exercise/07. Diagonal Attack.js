function diagonalAttack(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        output.push(input[i].split(' '));
    }
    for (let i = 0; i < output.length; i++) {
        for (let y = 0; y < output[i].length; y++) {
            output[i][y] = Number(output[i][y]);
        }
    }
    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;
    for (let i = 0; i < output.length; i++) {
        for (let y = 0; y < output[i].length; y++) {
            if (i === y) {
                sumDiagonal1 += Number(output[i][y]);
            }
            if ((i + y) === (output.length - 1)) {
                sumDiagonal2 += Number(output[i][y]);
            }
        }
    }
    if (sumDiagonal1 === sumDiagonal2) {
        for (let i = 0; i < output.length; i++) {
            for (let y = 0; y < output[i].length; y++) {
                if (i !== y && (i + y) !== (output.length - 1)) {
                    output[i][y] = sumDiagonal1;
                }
            }
            console.log(output[i].join(' '));
        }
    } else {
        for (let i = 0; i < output.length; i++) {
            console.log(output[i].join(' '));
        }
    }
}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);