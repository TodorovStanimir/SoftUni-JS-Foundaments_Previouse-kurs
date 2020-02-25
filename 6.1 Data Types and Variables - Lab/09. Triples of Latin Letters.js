function TriplesofLatinLetters(num){
    for (let d1 = 0; d1 < num; d1++) {
        for (let d2 = 0; d2 < num; d2++) {
            for (let d3 = 0; d3 < num; d3++) {
                console.log(`${String.fromCharCode(97+d1)}${String.fromCharCode(97+d2)}${String.fromCharCode(97+d3)}`);
            }
        }
    }
}
TriplesofLatinLetters(3)