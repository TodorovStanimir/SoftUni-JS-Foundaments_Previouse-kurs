function animalSanctuary(input) {
    const countAnimals = input.shift();
    let totalWeight = 0;

    for (let i = 1; i <= countAnimals; i++) {
        const line = (/n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-Za-z ]+)/g).exec(input.shift());
        if (line) {
            const nameAnimal = extractNameAndKindAnimal(line.groups['name']);
            const kindAnimal = extractNameAndKindAnimal(line.groups['kind']);
            totalWeight += calculateWeight(line.groups['name'].concat(line.groups['kind']));
            const countryAnimal = line.groups['country'];
            console.log(`${nameAnimal} is a ${kindAnimal} from ${countryAnimal}`);
        }
    }

    console.log(`Total weight of animals: ${totalWeight}KG`);

    function extractNameAndKindAnimal(string) {
        let output = string
            .split('')
            .filter(char => {
                if (('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z') || char === ' ')
                    return true
            })
            .join('')
        return output;
    }

    function calculateWeight(string) {
        let totalWeight = string.split('')
            .map(Number)
            .filter(char => char)
            .reduce((a, b) => a + b, 0)
        return totalWeight;
    }
}
animalSanctuary([3,
    'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
    'n:G3e%6org34e;t:C€$at2%;c--Africa',
    'n:AlicE:Won;c-India'
]);
animalSanctuary([4,
    'n:Bo^%4b35454bie#$;t:Ele5ph#$34a%nt;c--Africa',
    'n:Honey;t:Ti^^5ger;c--India',
    'bla;t:1234a;c--America',
    'n:A#$@545n;t:Cat241$@#23;cGermany'
])