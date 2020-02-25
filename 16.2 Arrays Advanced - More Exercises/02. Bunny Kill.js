function bunnyKill(input) {

    let snowballsDamage = 0;
    let killedBunnies = 0;

    let bunniesInHangar = [];
    let indexOfBombs = input.pop().split(' ');
    input.forEach(line => bunniesInHangar.push(line.split(' ').map(Number)));

    for (let index of indexOfBombs) {
        let [bombRow, bombCol] = index.split(',').map(Number);
        let startColumn = Math.max(bombCol - 1, 0);
        let finishColumn = Math.min(bunniesInHangar[0].length - 1, bombCol + 1);
        let startRow = Math.max(bombRow - 1, 0);
        let finishRow = Math.min(bunniesInHangar.length - 1, bombRow + 1)

        let powerOfBunny = bunniesInHangar[bombRow][bombCol];

        if (powerOfBunny !== 0) {
            bunniesInHangar[bombRow][bombCol] = 0;
            snowballsDamage += powerOfBunny;
            killedBunnies++;

            for (let x = startRow; x <= finishRow; x++) {
                for (let y = startColumn; y <= finishColumn; y++) {
                    if (powerOfBunny >= bunniesInHangar[x][y]) {
                        bunniesInHangar[x][y] = 0;
                    } else {
                        bunniesInHangar[x][y] = bunniesInHangar[x][y] - powerOfBunny;
                    }
                }
            }
        }
    }
    for (let x = 0; x < bunniesInHangar.length; x++) {
        for (let y = 0; y < bunniesInHangar[0].length; y++) {
            let powerOfCurrentBunny = bunniesInHangar[x][y];
            if (powerOfCurrentBunny !== 0) {
                snowballsDamage += powerOfCurrentBunny;
                killedBunnies++;
            }
        }
    }
    console.log(snowballsDamage);
    console.log(killedBunnies);
}

bunnyKill(["5 10 15 20", "10 10 10 10", "10 15 10 10", "10 10 10 10", "2,2 0,1"]);
bunnyKill(["10 10 10", "10 10 10", "10 10 10", "0,0"]);