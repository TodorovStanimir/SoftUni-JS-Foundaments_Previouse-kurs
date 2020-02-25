function tseamAccount(input) {
    let account = input.shift().split(' ');
    while ((line = input.shift()) !== 'Play!') {
        let [command, game] = line.split(' ');
        if (command === 'Install' && !account.includes(game)) {
            account.push(game);
        } else if (command === 'Uninstall' && account.includes(game)) {
            account.splice(account.indexOf(game), 1);
        } else if (command === 'Update' && account.includes(game)) {
            account.splice(account.indexOf(game), 1);
            account.push(game);
        } else if (command === 'Expansion' && account.includes(game.split('-')[0])) {
            account.splice(account.indexOf(game.split('-')[0]) + 1, 0, game.split('-').join(':'));
        }
    }
    console.log(account.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);