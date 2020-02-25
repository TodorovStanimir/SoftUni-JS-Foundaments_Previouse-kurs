startEnigma = (input) => {
    let numberMesseges = Number(input.shift());
    let atackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < numberMesseges; i++) {
        let subtrahend = input[i]
            .split('')
            .map(x => x.toLowerCase())
            .filter(x => (x === 's' || x === 't') || x === 'a' || x === 'r')
            .length;

        let planet = input[i]
            .split('')
            .map(element => element = String.fromCharCode(element.charCodeAt() - subtrahend))
            .join('');
        let pattern = /@([A-Za-z]+)[\w\s\"#$%&'()*+,./;>=<?[/\]^`{|}`~]*:([0-9]+)[\w\s\"#$%&'()*+,./;>=<?[/\]^`{|}`~]*!([A|D])![\w\s\"#$%&'()*+,./;>=<?[/\]^`{|}`~]*->([0-9]+)/g
        while ((result = pattern.exec(planet)) !== null) {
            if (result[3] !== null && result[3] === 'A') {
                atackedPlanets.push(result[1])
            } else if (result[3] !== null && result[3] === 'D') {
                destroyedPlanets.push(result[1])
            }
        }
    }
    atackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${atackedPlanets.length}`);
    atackedPlanets.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}
startEnigma([2,
    'EHfsytsnhf?8555&I&2C9555SR',
    'STCDoghudd4=63333$D$0A53333',
])
startEnigma([3,
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])