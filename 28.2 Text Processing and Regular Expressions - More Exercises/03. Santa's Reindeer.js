function santasReindeer(input) {
    let pattern = /\B[*]+[A-Z]+[a-z]+[*]\B/g;
    let reinderArray = []
    let output = input.split(' ');
    while ((reinder = pattern.exec(input)) !== null) {
        reinderArray.push(reinder);
        for (let index = 0; index < output.length; index++) {
            if (output[index] === reinder[reinder.length - 1]) {
                output.splice(index, 1);
                break;
            }
        }
    }
    console.log(reinderArray.join(', '));
    console.log('*'.repeat(20));
    console.log(output.join(' '))
}
santasReindeer("Oh my *Rudolf* dwarfs! This *Dasher* year's christmas *Prancer is about to be Comet* ruined because Santa has lost his deer and.");