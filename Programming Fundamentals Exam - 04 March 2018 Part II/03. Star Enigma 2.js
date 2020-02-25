startEnigma = (input) => {
    let result = {};
    result['A'] = [];
    result['D'] = [];
    for (let i = 1; i <= input[0]; i++) {
        let countStar = input[i].split('').filter(el => el.toLowerCase() === 's' || el.toLowerCase() === 't' || el.toLowerCase() === 'a' || el.toLowerCase() === 'r').length;
        let decreptedMessage = input[i].split('').map(el => String.fromCharCode(el.charCodeAt(0) - countStar)).join('');
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<popul>[\d]+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<count>[\d]+)/g;
        if (decreptedMessage.match(pattern)) {
            let message = pattern.exec(decreptedMessage);
            (message.groups.type === 'A') ? result['A'].push(message.groups.name) : result['D'].push(message.groups.name);
        }
    }
    Object.entries(result).forEach(type => {
        console.log(type[0] === 'A' ? `Attacked planets: ${type[1].length}` : `Destroyed planets: ${type[1].length}`);
        type[1].sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    })
}
startEnigma([2,
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
])
startEnigma([3,
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])
// Results:
// Attacked planets: 1
// -> Alderaa
// Destroyed planets: 1
// -> Cantonica
// Attacked planets: 0
// Destroyed planets: 2
// -> Cantonica
// -> Coruscant