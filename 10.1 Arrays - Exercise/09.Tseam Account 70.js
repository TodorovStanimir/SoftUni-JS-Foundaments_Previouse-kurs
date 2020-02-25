function tseamAccount(input) {
    let games = []

    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            games = input[0].split(' ');
        } else {
            let currentElement = input[i].split(' ');
            let command = currentElement[0];
            let game = currentElement[1];
            if (command === 'Play') {
                break;
            } else if (command === "Install") {
                if (!games.includes(game)) {
                    games.push(game);
                }
            } else if (command === "Uninstall") {
                for (let num in games) {
                    if (games[num] === game) {
                        games.splice(num, 1);
                        break;
                    }
                }
            } else if (command === "Update") {
                for (let num in games) {
                    if (games[num] === game) {
                        games.splice(num, 1);
                        games.push(game);
                        break;
                    }
                }
            } else if (command === "Expansion") {
                game1 = game.split('-');
                for (let num in games) {
                    if (games[num] === game1[0]) {
                        games.splice(num + 1, 0, game1.join(':'));
                        break;
                    }
                }
            }
        }
    }
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);