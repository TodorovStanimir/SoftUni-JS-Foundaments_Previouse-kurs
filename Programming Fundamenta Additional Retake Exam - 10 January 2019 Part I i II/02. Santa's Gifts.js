function santasGift(input) {
    let numberCommands = input.shift();
    let houses = input.shift().split(' ').map(Number);
    let santasPositions = 0;
    for (let numberComand = 1; numberComand <= numberCommands; numberComand++) {
        let currentCommand = (input.shift());
        let [command, steps, value] = currentCommand.split(' ');
        if (command === 'Forward') {
            steps = Number(steps);
            if (santasPositions + steps <= houses.length - 1) {
                santasPositions += steps;
                houses.splice(santasPositions, 1)
            }
        } else if (command === 'Back') {
            steps = Number(steps);
            if (santasPositions - steps >= 0) {
                santasPositions -= steps;
                houses.splice(santasPositions, 1)
            }
        } else if (command === 'Swap') {
            let index1 = houses.indexOf(Number(steps));
            let index2 = houses.indexOf(Number(value));
            if (index1 >= 0 && index2 >= 0) {
                houses[index1] = value;
                houses[index2] = steps;
            }
        } else if (command === 'Gift') {
            let houseNumber = Number(value);
            let index = Number(steps);
            if (index >= 0 && index <= houses.length - 1) {
                santasPositions = index;
                houses.splice(index, 0, houseNumber)
            }
        }
    }
    console.log(`Position: ${santasPositions}`);
    console.log(houses.join(', '));
}
santasGift([5,
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3',
]);

santasGift([6,
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1'
])