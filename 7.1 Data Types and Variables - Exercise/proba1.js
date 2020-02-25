function FutbolResults(input) {
    let result = ''
    let goals1 = 0;
    let goals2 = 0;
    let wins = 0;
    let loses = 0;
    let raventstva = 0;

    for (let i = 0; i < 3; i++) {
        result = String(input.shift())
        goals1 = Number(result[0]);
        goals2 = Number(result[2]);
        if (goals1 > goals2) {
            wins++;
        } else if (goals1 < goals2) {
            loses++
        } else {
            raventstva++;
        }
    }
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${raventstva}`);

}
FutbolResults(['3:1', '0:2', '0:0'])
FutbolResults(['4:2', '0:3', '1:0'])