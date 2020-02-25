function rosettaStone(input) {

    let linesInDecodingMatrix = Number(input.shift());
    let decodingMatrix = [];
    let messageMatrix = [];
    let alphabetic = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let output = '';

    for (let i = 1; i <= linesInDecodingMatrix; i++) {
        decodingMatrix.push(input.shift().split(' ').map(Number));
    }

    input.forEach(line => messageMatrix.push(line.split(' ').map(Number)));

    let columnInDecodingMatrix = decodingMatrix[0].length;

    for (let row = 0; row < messageMatrix.length; row += linesInDecodingMatrix) {
        for (let column = 0; column < messageMatrix[0].length; column += columnInDecodingMatrix) {
            for (let rowDecodinMatrix = 0; rowDecodinMatrix < linesInDecodingMatrix; rowDecodinMatrix++) {
                for (let columnDecodingMatrix = 0; columnDecodingMatrix < columnInDecodingMatrix; columnDecodingMatrix++) {
                    if ((row + rowDecodinMatrix) < (messageMatrix.length) && (column + columnDecodingMatrix) < (messageMatrix[0].length)) {
                        let a = messageMatrix[row + rowDecodinMatrix][column + columnDecodingMatrix] + decodingMatrix[rowDecodinMatrix][columnDecodingMatrix];
                        let b = alphabetic[a % 27];
                        messageMatrix[row + rowDecodinMatrix][column + columnDecodingMatrix] = b;
                    }
                }
            }
        }
    }
    for (let row = 0; row < messageMatrix.length; row++) {
        for (let column = 0; column < messageMatrix[0].length; column++) {
            let a = messageMatrix[row][column];
            output += a;
        }
    }
    console.log(output);
}
rosettaStone([ '2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22']);
rosettaStone([ '2', '31 32', '74 37', '19 0 23 25', '22 3 12 17', '5 9 23 11', '12 18 10 22']);