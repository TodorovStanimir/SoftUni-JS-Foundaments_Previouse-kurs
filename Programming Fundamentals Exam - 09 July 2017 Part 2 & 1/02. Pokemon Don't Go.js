pokemonDoNotGo = (input) => {
    let distancesToPokemons = input.shift().split(' ').map(Number);
    let sumOfDeletedElements = 0;
    while ((index = input.shift()) !== undefined) {
        index = Number(index);
        if (distancesToPokemons.length === 0) {
            break;
        }
        if (0 <= index && index < distancesToPokemons.length) {
            let element = distancesToPokemons[index];
            sumOfDeletedElements += Number(distancesToPokemons.splice(index, 1));
            distancesToPokemons.forEach((el, indeks) => {
                if (el <= element) {
                    distancesToPokemons[indeks] = el + element;
                } else {
                    distancesToPokemons[indeks] = el - element;
                }
            })
        } else if (index < 0) {
            let removedElement = distancesToPokemons[0];
            sumOfDeletedElements += Number(distancesToPokemons.shift());
            let lastElement = distancesToPokemons[distancesToPokemons.length - 1];
            distancesToPokemons.unshift(lastElement);
            distancesToPokemons.forEach((el, indeks) => {
                if (el <= removedElement) {
                    distancesToPokemons[indeks] = el + removedElement;
                } else {
                    distancesToPokemons[indeks] = el - removedElement;
                }
            })
        } else if (index >= distancesToPokemons.length) {
            let removedElement = distancesToPokemons[distancesToPokemons.length - 1];
            sumOfDeletedElements += Number(distancesToPokemons.pop());
            let firstElement = distancesToPokemons[0];
            distancesToPokemons.push(firstElement);
            distancesToPokemons.forEach((el, indeks) => {
                if (el <= removedElement) {
                    distancesToPokemons[indeks] = el + removedElement;
                } else {
                    distancesToPokemons[indeks] = el - removedElement;
                }
            })
        }
    }
    console.log(sumOfDeletedElements);

}
pokemonDoNotGo(['4 5 3', '1', '1', '0', ''])
pokemonDoNotGo(['5 10 6 3 5', '2', '4', '1', '1', '3', '0', '0', ''])