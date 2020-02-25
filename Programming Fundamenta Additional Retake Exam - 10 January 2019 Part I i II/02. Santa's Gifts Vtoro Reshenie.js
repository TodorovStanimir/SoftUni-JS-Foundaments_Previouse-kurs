function santasGift(input) {
    let countCommand = input.shift();
    let houses = input[0].split(' ').map(Number);
    let index = 0;

    for (let count = 1; count <= countCommand; count++) {

        let tokens = Array.from(input[count].split(' '));

        if (tokens[0] === 'Forward' && index + Number(tokens[1]) <= houses.length - 1) {
            index += Number(tokens[1]);
            houses.splice(index, 1);
        } else if (tokens[0] === 'Back' && index - Number(tokens[1]) >= 0) {
            index -= Number(tokens[1]);
            houses.splice(index, 1);
        } else if (tokens[0] === 'Gift' && Number(tokens[1]) >= 0 && Number(tokens[1]) <= houses.length - 1) {
            index = Number(tokens[1]);
            houses.splice(index, 0, Number(tokens[2]));
        } else if (tokens[0] === 'Swap' && houses.indexOf(Number(tokens[1])) !== -1 &&
            houses.indexOf(Number(tokens[2])) !== -1) {
            let index1 = houses.indexOf(Number(tokens[1]));
            let index2 = houses.indexOf(Number(tokens[2]));
            houses[index1] = Number(tokens[2]);
            houses[index2] = Number(tokens[1]);
        }
    }
    console.log(`Position: ${index}`);
    console.log(`${houses.join(', ')}`);
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