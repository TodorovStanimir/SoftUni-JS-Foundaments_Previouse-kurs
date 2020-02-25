function cardGame(input) {
    let power = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    let type = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let players = new Map();
    input.forEach(line => {
        let namePlayer = line.split(': ')[0];
        let cardsPlayer = line.split(': ')[1].split(', ');

        if (!players.has(namePlayer)) {
            players.set(namePlayer, []);
            cardsPlayer.forEach(card => {
                if (!players.get(namePlayer).includes(card)) {
                    players.get(namePlayer).push(card);
                }
            });
        } else {
            cardsPlayer.forEach(card => {
                if (!players.get(namePlayer).includes(card)) {
                    players.get(namePlayer).push(card);
                }
            });
        }
    });

    let result = [...players.entries()];
    result.forEach(player => {
        let totalValue = 0;
        player[1].forEach(card => {
            let powerCard = power[card.split('').filter((el, index) => index !== card.length - 1).join('')];
            let typeCard = type[card.split('')[card.length - 1]];
            totalValue += powerCard * typeCard;
        });
        console.log(`${player[0]}: ${totalValue}`);
    });
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);