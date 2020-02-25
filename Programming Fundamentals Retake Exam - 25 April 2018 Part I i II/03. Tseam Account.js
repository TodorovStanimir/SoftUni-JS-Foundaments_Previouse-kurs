function tseamAccount(input) {
    let peshosAccount = input.shift().split(' ');

    while ((line = input.shift()) !== 'Play!') {
        if (line.includes('Install')) {
            let game = line.split(' ')[1];
            if (!peshosAccount.includes(game)) {
                peshosAccount.push(game);
            }
        } else if (line.includes('Uninstall')) {
            let game = line.split(' ')[1];
            if (peshosAccount.includes(game)) {
                peshosAccount.splice(peshosAccount.indexOf(game), 1);
            }
        } else if (line.includes('Update')) {
            let game = line.split(' ')[1];
            if (peshosAccount.includes(game)) {
                peshosAccount.splice(peshosAccount.indexOf(game), 1);
                peshosAccount.push(game);
            }
        } else if (line.includes('Expansion')) {
            let [game, expansion] = String(line.split(' ')[1]).split('-');
            if (peshosAccount.includes(game)) {
                peshosAccount.splice(peshosAccount.indexOf(game) + 1, 0, `${game}:${expansion}`);
            }
        }
    }
    console.log(peshosAccount.join(' '));
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