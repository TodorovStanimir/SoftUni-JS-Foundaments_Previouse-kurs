pokemonDoNotGo = (input) => {
    let pokemons = input.shift().split(' ').map(Number);
    let sumRemovedElements = 0;
    for (let index of input) {
        if (index === undefined) {
            break;
        }
        index = Number(index);
        if (index < 0) {
            let removedElement = pokemons.splice(0, 1, pokemons[pokemons.length - 1]);
            sumRemovedElements += removedElement[0];
            pokemons = changingArr(pokemons, removedElement[0]).slice(0);
        } else if (index >= pokemons.length) {
            let removedElement = pokemons.splice(pokemons.length - 1, 1, pokemons[0]);
            sumRemovedElements += removedElement[0];
            pokemons = changingArr(pokemons, removedElement[0]).slice(0);
        } else {
            let removedElement = pokemons.splice(index, 1);
            sumRemovedElements += removedElement[0];
            pokemons = changingArr(pokemons, removedElement[0]).slice(0);
        }
        if (pokemons.length === 0)
            break;
    }
    function changingArr(arr, element) {
        arr = arr.map(el => { return (el <= element) ? el + element : el - element });
        return arr;
    }
    console.log(sumRemovedElements);
}
pokemonDoNotGo(['4 5 3', '1', '1', '0'])
pokemonDoNotGo(['5 10 6 3 5', '2', '4', '1', '1', '3', '0', '0', ''])