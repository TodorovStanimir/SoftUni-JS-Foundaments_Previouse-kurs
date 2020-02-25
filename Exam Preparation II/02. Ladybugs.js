ladyBugs = (input) => {
    let sizeFieldBugs = parseInt(input.shift());
    let fieldBugs = [];
    let indexesWithBugs = input.shift().split(' ').map(Number);
    for (let i = 0; i < sizeFieldBugs; i++) {
        if (indexesWithBugs.includes(i)) {
            fieldBugs[i] = 1;
        } else {
            fieldBugs[i] = 0;
        }
    }
    while ((line = input.shift()) !== 'end') {
        let [indexWithBugs, direction, step] = line.split(' ');
        indexWithBugs = Number(indexWithBugs);
        step = Number(step);
        if (fieldBugs[indexWithBugs] === 1) {
            fieldBugs[indexWithBugs] = 0;
            if (direction === 'right') {
                indexWithBugs += step;
                while (fieldBugs[indexWithBugs] === 1) {
                    if (indexWithBugs === fieldBugs.length) {
                        break;
                    }
                    indexWithBugs += step;
                }
                if (indexWithBugs < fieldBugs.length) {
                    fieldBugs[indexWithBugs] = 1;
                }
            } else if (direction === 'left') {
                indexWithBugs -= step;
                while (fieldBugs[indexWithBugs] === 1) {
                    if (indexWithBugs <= 0) {
                        break;
                    }
                    indexWithBugs -= step;
                }
                if (indexWithBugs >= 0) {
                    fieldBugs[indexWithBugs] = 1;
                }
            }
        }
    }
    console.log(fieldBugs.join(' '));
}
ladyBugs(['3', '0 1', '0 right 1', '2 right 1', 'end']);
ladyBugs(['3', '0 1 2', '0 right 1', '1 right 1', '2 right 1', 'end']);
ladyBugs(['5', '3', '3 left 2', '1 left -2', 'end']);