function vaporWinterSale(input) {
    let games = {};
    let gamesWithDls = {};
    input[0].split(', ')
        .forEach(line => {
            if (line.includes('-')) {
                let [game, price] = line.split('-');
                games[game] = Number(price);
            }
            if (line.includes(':')) {
                let [game, dls] = line.split(':');
                if (game in games) {
                    gamesWithDls[`${game} - ${dls}`] = 1.2 * games[game];
                    delete games[game];
                }
            }
        });
    Object.entries(gamesWithDls)
        .map(game => [game[0], game[1] / 2])
        .sort((a, b) => a[1] - b[1])
        .forEach(game => console.log(`${game[0]} - ${game[1].toFixed(2)}`))
    Object.entries(games)
        .map(game => [game[0], game[1] * 0.80])
        .sort((a, b) => b[1] - a[1])
        .forEach(game => console.log(`${game[0]} - ${game[1].toFixed(2)}`))
}
vaporWinterSale(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);
vaporWinterSale(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC']);

// Results:
// League of Leg Ends - DoaT - 6.00
// WitHer 3 - Blood and Beer - 30.00
// Cyberfunk 2077 - 96.00
// FullLife 3 - 48.00
// BattleShield 5 - CoD edition - 38.84
// Dead Red Redemption - no DLC - 60.00
// Dog of War - 36.00
// FortLite - 20.00
// Center Strike - 11.99