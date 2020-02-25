function mobaChalenger(input) {
    let players = {};
    while ((line = input.shift()) !== 'Season end') {
        if (!line.includes(' vs ')) {
            let [player, position, skill] = line.split(' -> ');
            if (!(player in players)) {
                players[player] = {
                    totalSkill: Number(skill),
                    positions: { [position]: Number(skill) }
                }
            } else {
                if (!Object.keys(players[player].positions).includes(position)) {
                    players[player].positions[position] = Number(skill);
                    players[player].totalSkill += Number(skill);
                } else {
                    if (players[player].positions[position] < Number(skill)) {
                        players[player].totalSkill += (Number(skill) - players[player].positions[position])
                        players[player].positions[position] = Number(skill);
                    }
                }
            }
        } else {
            let [player1, player2] = line.split(' vs ');
            if (player1 in players && player2 in players) {
                for (let position of Object.keys(players[player1].positions)) {
                    if (Object.keys(players[player2].positions).includes(position)) {
                        if (players[player1].totalSkill > players[player2].totalSkill) {
                            delete players[player2];
                        } else if (players[player1].totalSkill < players[player2].totalSkill) {
                            delete players[player1];
                        }
                        break;
                    }
                }
            }
        }
    }
    Object.entries(players).sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]))
        .forEach(player => {
            console.log(`${player[0]}: ${player[1].totalSkill} skill`);
            
            Object.entries(player[1].positions).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(position => console.log(`- ${position[0]} <::> ${position[1]}`));
        });
}
mobaChalenger(['Pesho -> Adc -> 400',
    'Gosho -> Jungle -> 300',
    'Stamat -> Mid -> 200',
    'Stamat -> Support -> 250',
    'Season end'
]);
mobaChalenger(['Pesho -> Adc -> 400',
    'Bush -> Tank -> 150',
    'Faker -> Mid -> 200',
    'Faker -> Support -> 250',
    'Faker -> Tank -> 250',
    'Pesho vs Faker',
    'Faker vs Bush',
    'Faker vs Hide',
    'Season end'
]);