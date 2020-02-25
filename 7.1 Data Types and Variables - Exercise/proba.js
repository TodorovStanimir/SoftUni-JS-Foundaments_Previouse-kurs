function TennisRanklist(input) {
    let countTournirs = parseInt(input.shift());
    let points = parseInt(input.shift());
    let currentTournir = ''
    let counterWinsTournirs = 0
    let currentPoints = 0;

    for (let i = 0; i < countTournirs; i++) {
        currentTournir = String(input.shift());
        if (currentTournir === 'W') {
            points += 2000;
            currentPoints += 2000;
            counterWinsTournirs++;
        } else if (currentTournir === 'F') {
            points += 1200;
            currentPoints += 1200;
        } else if (currentTournir === 'SF') {
            points += 720;
            currentPoints += 720;
        }
    }
    let averagePoints = (currentPoints) / countTournirs;
    let percentWinsTournirs = counterWinsTournirs / countTournirs * 100;
    
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWinsTournirs.toFixed(2)}%`);
}
//TennisRanklist([5, 1400, 'F', 'SF', 'W', 'W', 'SF'])
//TennisRanklist([4, 750, 'SF', 'W', 'SF', 'W'])
TennisRanklist([7, 1200, 'SF', 'F', 'W', 'F', 'W', 'SF', 'W']);