function vaporWinterSale(input1) {
    input = input1[0].split(', ');
    let nameGame = '';
    let priceGame = 0;
    let dLC = '';
    let games = new Map();
    for (let command of input) {
        if (command.includes('-')) {
            [nameGame, priceGame] = command.split('-');
            games.set(nameGame, ['', Number(priceGame)]);
        } else if (command.includes(':')) {
            [nameGame, dLC] = command.split(':')
            if (games.has(nameGame)) {
                let price = 1.2*games.get(nameGame)[1];
                games.set(nameGame, [dLC, price]);
            }
        }
    }

    games = [...games.entries()];
    games.forEach(el => {
        if (el[1][0] === '') {
            el[1][1] = 0.80 * el[1][1];
        } else {
            el[1][1] = 0.50 * el[1][1];
        }
    });

    games.sort((a, b) => {
        if (b[1][0].length > a[1][0].length) {
            return 1;
        } else if (b[1][0].length < a[1][0].length) {
            return -1;
        }
    });

    games.sort((a, b) => {
        if (a[1][0].length !== 0 && b[1][0].length !== 0) {
            if (a[1][1] > b[1][1]) {
                return 1;
            } else if (a[1][1] < b[1][1]) {
                return -1;
            }
        } else if (a[1][0].length !== 0 && b[1][0].length === 0) {
            return -1;
        } else if (a[1][0].length === 0 && b[1][0].length === 0) {
            if (a[1][1] > b[1][1]) {
                return -1;
            } else if (a[1][1] < b[1][1]) {
                return 1;
            }
        }
    });

    games.forEach(el => {
        if (el[1][0].length !== 0) {
            console.log(`${el[0]} - ${el[1][0]} - ${el[1][1].toFixed(2)}`);
        } else if (el[1][0].length === 0) {
            console.log(`${el[0]} - ${el[1][1].toFixed(2)}`);
        }
    })
}
vaporWinterSale(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);
vaporWinterSale(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC']);