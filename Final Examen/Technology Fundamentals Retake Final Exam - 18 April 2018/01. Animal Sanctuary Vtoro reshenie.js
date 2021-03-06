function animalSanctuary(arr) {
    let linesNumber = Number(arr[0]);
    let weightOfAnimals = 0;
    for (let i = 1; i <= linesNumber; i++) {
        let pattern = /^n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-Za-z ]+)$/g;
        let validLine;
        if ((validLine = pattern.exec(arr[i])) !== null) {
            let nameCode = validLine.groups['name'];
            let kindCode = validLine.groups['kind'];
            let country = validLine.groups['country'];
            let name = nameCode.match(/[a-z\s]+/gi).join('');
            let kind = kindCode.match(/[a-z\s]+/gi).join('');
            weightOfAnimals += Sum(nameCode) + Sum(kindCode);
            console.log(`${name} is a ${kind} from ${country}`);
        }
    }
    console.log(`Total weight of animals: ${weightOfAnimals}KG`);
    function Sum(weight) {
        return weight.replace(/[^0-9]/g, '')
            .split('')
            .map(Number)
            .reduce((a, b) => a + b, 0);
    }
}
 
animalSanctuary(['3',
    'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
    'n:G3e%6org43e;t:C€$at2%;c--Africa',
    'n:AlicE:Won;c-India']
);

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