function easterGift(input) {
    let result = input.shift().split(' ');

    while ((line = input.shift()) !== 'No Money') {
        let tokens = line.split(' ');
        let command = tokens.shift();

        if (command === 'OutOfStock') {
            let gift = tokens[0];
            while (result.indexOf(gift) !== -1) {
                result[result.indexOf(gift)] = 'None'
            }
        } else if (command === 'Required') {
            let gift = tokens[0];
            let index = Number(tokens[1]);
            if (index >= 0 && index < result.length) {
                result[index] = gift;
            }
        } else if (command === 'JustInCase') {
            let gift = tokens[0];
            result.splice(result.length - 1, 1, gift);
        }
        
    }
    result = result.filter(gift => gift !== 'None');
    console.log(result.join(' '));
}
easterGift(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);
easterGift(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
])