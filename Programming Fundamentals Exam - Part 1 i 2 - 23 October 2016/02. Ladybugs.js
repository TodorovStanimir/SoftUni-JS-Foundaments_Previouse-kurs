function ladyBugs(input) {
    let field = [];
    let fieldsize = Number(input.shift());
    let indexesWithLadyBugs = input.shift().split(' ').map(Number);
    for (let i = 0; i < fieldsize; i++) {
        (indexesWithLadyBugs.includes(i)) ? field[i] = 1 : field[i] = 0
    };
    let line = input.shift();
    while (line !== 'end') {
        let [startIndex, direction, step] = line.split(' ');
        startIndex = Number(startIndex);
        step = Number(step);
        let finishedIndex = startIndex;
        if (field[startIndex] === 1) {
            field[startIndex] = 0
            if (direction === 'right') {
                finishedIndex= startIndex+step;
                while (field[finishedIndex] === 1) {
                    finishedIndex += step;
                }
            } else {
                finishedIndex= startIndex-step;
                while (field[finishedIndex] === 1) {
                    finishedIndex -= step;
                }
            }
            if (finishedIndex <= field.length - 1 && finishedIndex >= 0) {
                field[finishedIndex] = 1;
            }
        }
        line = input.shift();
    }
    console.log(field.join(' '));
}
ladyBugs(['3', '0 1', '0 right 1', '2 right 1', 'end']);
ladyBugs(['3', '0 1 2', '0 right 1', '1 right 1', '2 right 1', 'end']);
ladyBugs(['5', '3', '3 left 2', '1 left -2', 'end'])