function solve(input) {
    let counter = Number(input[0]);
    let pattern = /^n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-Za-z ]+)$/g;
    let weight = 0;
    for (let i = 1; i <= counter; i++) {
        let line = input[i];
        if (line.match(pattern)) {
            let [rawName, rawKind, country] = line.split(';')
            name = formingNameAndKind(rawName.substring(2));
            kind = formingNameAndKind(rawKind.substring(2));
            country = country.substring(3);

            weight += calculateWeight(rawName.substring(2) + rawKind.substring(2));
            console.log(`${name} is a ${kind} from ${country}`);
        }
    }
    console.log(`Total weight of animals: ${weight}KG`);

    function calculateWeight(string) {
        return string.replace(/[^0-9]/g, '').split('').map(Number).reduce((a, b) => a + b, 0)
    }

    function formingNameAndKind(string) {
        readyString = string.split('').filter(char => {
            return (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char === ' ') ? true : false
        }).join('');
        return readyString;
    }
}

solve([3,
    'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
    'n:G3e%6org34e;t:C€$at2%;c--Africa',
    'n:AlicE:Won;c-India'
]);
solve([4,
    'n:Bo^%4b35454bie#$;t:Ele5ph#$34a%nt;c--Africa',
    'n:Honey;t:Ti^^5ger;c--India',
    'bla;t:1234a;c--America',
    'n:A#$@545n;t:Cat241$@#23;cGermany'
])