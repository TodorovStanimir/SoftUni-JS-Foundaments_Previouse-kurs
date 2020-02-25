function magicMatrices(num) {
    let boolRow = true;
    let boolColumn = true;
    let sumOddRow = 0;
    let sumEvenRow = 0;
    let sumOddColumn = 0;
    let sumEvenColumn = 0;
    let counterRow = 0;
    let counterColumn = 0;

    for (let i = 1; i <= num.length; i++) {
        let currentnum = num[i - 1];
        counterRow++;
        for (let y = 1; y <= currentnum.length; y++) {
            if (i % 2 !== 0) {
                sumOddRow += currentnum[y - 1];
            } else {
                sumEvenRow += currentnum[y - 1];
            }
        }
        if (counterRow >= 2 && counterRow % 2 === 0) {
            if (sumEvenRow !== sumOddRow) {
                boolRow = false;
                break;
            } else {
                sumOddRow = 0;
            }
        } else if (counterRow >= 2 && counterRow % 2 !== 0) {
            if (sumEvenRow !== sumOddRow) {
                boolRow = false;
                break;
            } else {
                sumEvenRow = 0;
            }

        }
    }
    for (let col = 1; col <= num[0].length; col++) {
        counterColumn++;
        for (let row = 1; row <= num.length; row++) {
            if (col % 2 !== 0) {
                sumOddColumn += num[col - 1][row - 1];
            } else {
                sumEvenColumn += num[col - 1][row - 1];
            }
        }
        if (counterColumn >= 2 && counterColumn % 2 === 0) {
            if (sumEvenColumn !== sumOddColumn) {
                boolColumn = false;
                break;
            } else {
                sumOddColumn = 0;
            }
        } else if (counterColumn >= 2 && counterColumn % 2 !== 0) {
            if (sumEvenColumn !== sumOddColumn) {
                boolColumn = false;
                break;
            } else {
                sumEvenColumn = 0;
            }

        }
    }
    if (boolColumn && boolRow) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);