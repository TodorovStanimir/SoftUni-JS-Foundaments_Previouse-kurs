function snowWhite(string, dwarfsNames) {
    let output = string.split(' ');
    let indexes = [];
    let counter = 1;
    let newCounter = -1
    for (let index in output) {
        if (output[index] === 'dwarf') {
            if (counter <= dwarfsNames.length) {
                indexes.push(Number(index) + counter);
                counter++;
            } else {
                indexes.push(Number(index) + counter + newCounter);
                newCounter--;
            }
        }
    }
    for (let index in indexes) {
        if (index < dwarfsNames.length) {
            output.splice(indexes[index], 0, dwarfsNames[index]);
        } else {
            output.splice(indexes[index], 1);
        }
    }
    console.log(output.join(' '));
}
snowWhite("Yet another dwarf fairytale tragedy! There are dwarf so many dwarfs, is it dwarf possible to help dwarf Show and dwarf Ivan and and dwarf Peter white?",
    ["Doc", "Dopey", "Sleepy"]);