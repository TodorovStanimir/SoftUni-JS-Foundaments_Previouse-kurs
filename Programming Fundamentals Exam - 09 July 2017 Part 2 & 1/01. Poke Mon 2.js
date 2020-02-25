pokeMon = (input) => {
    let pokePower = parseInt(input[0]);
    let pokeDistance = parseInt(input[1]);
    let counter = 0;
    while (pokePower >= pokeDistance) {
        counter++;
        pokePower = pokePower - pokeDistance;
        if (pokePower === parseInt(input[0])/2 && parseInt(input[2]) !== 0) {
            pokePower = parseInt(pokePower / parseInt(input[2]));
        }
    }
    console.log(`${pokePower}\n${counter}`);
}
pokeMon(['5', '2', '3', '']);
pokeMon(['10', '5', '2', '']);