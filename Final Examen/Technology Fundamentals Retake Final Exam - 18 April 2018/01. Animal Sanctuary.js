function animalSanctuary(input) {
    let countAnimals = input[0];
    let weight = 0;
    for (let numberAnimal = 1; numberAnimal <= countAnimals; numberAnimal++) {
        let pattern = /^n:{1}[^;]*;{1}t:{1}[^;]*;c--{1}[A-Za-z\s]+$/g;
        if (input[numberAnimal].match(pattern)) {
            let [animalName, animalKind, animalCountry] = input[numberAnimal].split(';');
            let name = '';
            let kind = '';
            let country = '';
            animalName = animalName.substr(2);
            animalName = animalName.split('');
            animalName.forEach(el => {
                if (97 <= el.toLowerCase().charCodeAt(0) && el.toLowerCase().charCodeAt(0) <= 122 ||
                    el.toLowerCase().charCodeAt(0) === 32) {
                    name += el;
                } else if (48 <= el.toLowerCase().charCodeAt() && el.toLowerCase().charCodeAt() <= 57) {
                    weight += Number(el);
                }
            });
            animalKind = animalKind.substr(2);
            animalKind = animalKind.split('');
            animalKind.forEach(el => {
                if (97 <= el.toLowerCase().charCodeAt(0) && el.toLowerCase().charCodeAt(0) <= 122 ||
                    el.toLowerCase().charCodeAt(0) === 32) {
                    kind += el;
                } else if (48 <= el.toLowerCase().charCodeAt() && el.toLowerCase().charCodeAt() <= 57) {
                    weight += Number(el);
                }
            });
            animalCountry = animalCountry.substr(3)
            animalCountry = animalCountry.split('');
            animalCountry.forEach(el => {
                if (97 <= el.toLowerCase().charCodeAt(0) && el.toLowerCase().charCodeAt(0) <= 122 ||
                    el.toLowerCase().charCodeAt(0) === 32) {
                    country += el;
                }
            });
            console.log(`${name} is a ${kind} from ${country}`);
        }
    }
    console.log(`Total weight of animals: ${weight}KG`);
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