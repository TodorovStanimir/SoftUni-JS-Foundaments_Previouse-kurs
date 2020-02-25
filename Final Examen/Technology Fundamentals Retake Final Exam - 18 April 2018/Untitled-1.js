function solve(input) {
    let countAnimals = input[0];
    let weight = 0;
    for (let numberAnimal = 1; numberAnimal <= countAnimals; numberAnimal++) {
        let pattern = /^n:{1}[^;]*;{1}t:{1}[^;]*;c--{1}[A-Za-z\s]+$/g;
        if (input[numberAnimal].match(pattern)) {
            let tokens = /^n:{1}(?<name>[^;]*);{1}t:{1}(<>[^;]*);c--{1}[A-Za-z\s]+$/g.exec(nput[numberAnimal])
            let [animalName, animalKind, animalCountry] = input[numberAnimal].split(';');
            animalName = animalName.split('n:')[1];
            animalKind = animalKind.split('t:')[1];
            let country = animalCountry.split('c--')[1];
 
            [name, weightName] = checkNameAndKind(animalName);
            [kind, weightKind] = checkNameAndKind(animalKind);
            weight += weightName + weightKind;
            
            console.log(`${name} is a ${kind} from ${country}`);
        }
    }
    console.log(`Total weight of animals: ${weight}KG`);
 
    function checkNameAndKind(arg1) {
        let output = '';
        let weight = 0
        arg1 = arg1.split('');
        let pattern1 = /[a-z\s]/gi;
        let pattern2 = /[0-9]/g;
        arg1.forEach(el => {
            if (el.match(pattern1)) {
                output += el;
            } else if (el.match(pattern2)) {
                weight += Number(el);
            }
        });
        return [output, weight];
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