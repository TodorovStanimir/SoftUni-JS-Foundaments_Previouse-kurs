function carWash(input) {
    let output = 0;
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case ('soap'):
                output += 10;
                break;
            case ('vacuum cleaner'):
                output += 25 / 100 * output;
                break;
            case ('mud'):
            output -= 10 / 100 * output;
                break;
            case ('water'):
                output += 20 / 100 * output;
                break;
        }
    }
    console.log(`The car is ${output.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);