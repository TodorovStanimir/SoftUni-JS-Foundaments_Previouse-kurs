function orbit(input) {
    let output = [];
    let x = input[2];
    let y = input[3];
    for (let i = 0; i < input[0]; i++) {
        let row = [];
        for (let z = 0; z < input[1]; z++) {
            row.push(0);
        }
        output.push(row);
    }


    for (let i = 0; i < output.length; i++) {
        for (let z = 0; z < output[i].length; z++) {
            let differencex = Math.abs(i - x);
            let differencey = Math.abs(z - y);
            let difference = Math.max(differencex, differencey) + 1;
            output[i][z] = difference;

        }
        console.log(output[i].join(' '));
    }
}
orbit([3, 3, 2, 2])