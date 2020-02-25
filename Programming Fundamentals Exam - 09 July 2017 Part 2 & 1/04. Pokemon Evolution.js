pokemonEvolution = (input) => {
    let pokemons = new Map();

    while ((line = input.shift()) !== 'wubbalubbadubdub') {
        let [pokemonName, evolutionType, evolutionIndex] = line.split(' -> ');
        if (evolutionType !== undefined && evolutionIndex !== undefined) {
            evolutionIndex = Number(evolutionIndex);
            if (!pokemons.has(pokemonName)) {
                let evolution = {};
                evolution[evolutionType] = evolutionIndex;
                pokemons.set(pokemonName, [evolution]);
            } else {
                let evolution = {};
                evolution[evolutionType] = evolutionIndex;
                pokemons.get(pokemonName).push(evolution);
            }
        } else if (pokemons.get(pokemonName) !== undefined) {
            let output = pokemons.get(pokemonName)
            console.log(`# ${pokemonName}`);
            output.forEach(evolution => {
                console.log(`${Object.keys(evolution)} <-> ${Object.values(evolution)}`);
            })
        }
    }
    for (let [pocemonName, pocemonEvolutions] of pokemons) {
        pocemonEvolutions = pocemonEvolutions.sort((evolution1, evolution2) => {
            if (Object.values(evolution1)[0] < Object.values(evolution2)[0] ||
                Object.values(evolution1)[0] > Object.values(evolution2)[0])
                return Object.values(evolution2)[0] - Object.values(evolution1)[0];
        });
        pokemons.set(pocemonName, pocemonEvolutions);
    }
    for (let [pocemonName, pocemonEvolutions] of pokemons) {
        console.log(`# ${pocemonName}`);
        pocemonEvolutions.forEach(evolution => {
            console.log(`${Object.keys(evolution)} <-> ${Object.values(evolution)}`);
        });
    }
}
pokemonEvolution(['Ekans -> Hybrid -> 100',
    'Nidoran -> Physical -> 150',
    'Ekans -> Psychological -> 50',
    'Jigglypuff -> Hybrid -> 1000',
    'Jigglypuff -> Physical -> 2000',
    'wubbalubbadubdub',
    ''
]);
pokemonEvolution(['Pikachu -> Hybrid -> 100',
    'Meowth -> Physical -> 100',
    'Pikachu -> Psychological -> 50',
    'Meowth -> Physical -> 50',
    'Pikachu -> Hybrid -> 150',
    'Meowth',
    'Pikachu',
    'wubbalubbadubdub',
    ''
])