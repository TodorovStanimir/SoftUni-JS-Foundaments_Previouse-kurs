function cardGame(playersinput) {
    let sheetPlayers = new Map();
    for (let line of playersinput) {
        let [player, cards] = line.split(': ');
        cards = [...(new Set(cards.split(', '))).values()];
        if (!sheetPlayers.has(player)) {
            sheetPlayers.set(player, cards);
        } else {
            sheetPlayers.set(player, [...new Set(sheetPlayers.get(player).concat(cards).values())]);
        }
    }

    for (let [player, cards] of sheetPlayers) {
        console.log(`${player}: ${calculate(cards)}`);

    }

    function calculate(input) {
        let totalPower = 0;
        let powerCard = {
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        }
        let typeCard = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
        input.forEach(card => {
            let power='';
            let type='';
            if (card.length===2){
                [power, type]=card.split('');
            } else {
                power=card.substr(0,2);
                type=card.substr(2,1);
            }
            totalPower += powerCard[power] * typeCard[type];
        });
        return totalPower;
    }
}
cardGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])