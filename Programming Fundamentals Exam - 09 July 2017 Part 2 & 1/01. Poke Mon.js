pokeMon = (input) => {
    let pokePower = parseInt(input[0]);
    let distance = parseInt(input[1]);
    let faktorY = parseInt(input[2]);
    let target = 0;
    while (pokePower >= distance) {
        pokePower -= distance;
        target++;
        if (pokePower === parseInt(input[0]) / 2) {
            if (faktorY !== 0) {
                pokePower = parseInt(pokePower / faktorY);
            }
        }
    }
    console.log(pokePower);
    console.log(target);
}
// pokeMon(['5', '2', '3', '']);
pokeMon(['10', '5', '2', '']);