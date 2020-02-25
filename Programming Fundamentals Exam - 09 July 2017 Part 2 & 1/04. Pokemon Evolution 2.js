pokemonEvolution = (input) => {
    let pokemons = {};
    for (let line of input) {
        if (line === 'wubbalubbadubdub') {
            break;
        }
        let [name, type, index] = line.split(' -> ');
        if (type !== undefined) {
            if (!(name in pokemons)) {
                pokemons[name] = [];
            }
            pokemons[name].push({ [type]: Number(index) });
        } else {
            if (name in pokemons) {
                console.log(`# ${name}`)
                pokemons[name].forEach(element => {
                    console.log(`${Object.keys(element)[0]} <-> ${Object.values(element)[0]}`)
                });
            }
        }
    }
    for (let pokemon in pokemons) {
        console.log(`# ${pokemon}`);
        pokemons[pokemon].sort((a, b) => Object.values(b)[0] - Object.values(a)[0]).forEach(el => {console.log(`${Object.keys(el)[0]} <-> ${Object.values(el)[0]}`)});
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