function tseamAccount(games) {
    let listOfGames = games.shift().split(' ');
    let currentOperation = games.shift();

    while (currentOperation !== 'Play!') {
        let [command, game] = currentOperation.split(' ');
        switch (command) {
            case 'Install':
                if (!listOfGames.includes(game)) {
                    listOfGames.push(game);
                }
                break;
            case 'Uninstall':
                if (listOfGames.includes(game)) {
                    listOfGames.splice(listOfGames.indexOf(game), 1);
                }
                break;
            case 'Update':
                if (listOfGames.includes(game)) {
                    listOfGames.splice(listOfGames.indexOf(game), 1);
                    listOfGames.push(game);
                }
                break;
            case 'Expansion':
                let [gameName, expansion] = game.split('-');
                if (listOfGames.includes(gameName)) {
                    listOfGames.splice(listOfGames.indexOf(gameName) + 1, 0, `${gameName}:${expansion}`);
                }
                break;
        }
        currentOperation = games.shift();
    }
    console.log(listOfGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
])
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
])