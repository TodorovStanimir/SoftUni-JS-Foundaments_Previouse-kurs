hornetArmada = (input) => {
    let numberCommands = parseInt(input.shift());
    let legions = {};
    for (let i = 1; i <= numberCommands; i++) {
        let line = input.shift();
        let [lastActivity, tokens] = line.split(' = ');
        lastActivity = Number(lastActivity);
        let nameLegion = tokens.split(' -> ')[0].trim();
        let [soldierType, soldierCount] = tokens.split(' -> ')[1].split(':');
        soldierCount = Number(soldierCount);

        if (!(nameLegion in legions)) {
            legions[nameLegion] = {
                lastActivity,
                soldierTypes: { [soldierType]: soldierCount }
            }
        } else {
            if (legions[nameLegion].lastActivity <= lastActivity) {
                legions[nameLegion].lastActivity = lastActivity;
            }
            if (!(soldierType in legions[nameLegion].soldierTypes)) {
                legions[nameLegion].soldierTypes[soldierType] = soldierCount;
            } else {
                legions[nameLegion].soldierTypes[soldierType] += soldierCount;
            }
        }
    }
    let lastCommand = input.shift()
    if (lastCommand.startsWith('0') || lastCommand.startsWith('1') || lastCommand.startsWith('2')
        || lastCommand.startsWith('3') || lastCommand.startsWith('4') || lastCommand.startsWith('5')
        || lastCommand.startsWith('6') || lastCommand.startsWith('7') || lastCommand.startsWith('8')
        || lastCommand.startsWith('9')) {
        let activity = Number(lastCommand.substring(0, lastCommand.indexOf('\\')));
        let requestedSoldierType = lastCommand.substring(lastCommand.indexOf('\\') + 1)
        let result = [];
        Object.entries(legions)
            .forEach(el => {
                if (el[1].lastActivity < activity && Object.keys(el[1].soldierTypes).includes(requestedSoldierType)) {
                    result.push([el[0], Object.values(el[1].soldierTypes)[Object.keys(el[1].soldierTypes).indexOf(requestedSoldierType)]])
                }
            });
        result.sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]} -> ${el[1]}`))
    } else {
        let requestedSoldierType = lastCommand;
        let result = [];
        Object.entries(legions)
            .forEach(el => {
                if (Object.keys(el[1].soldierTypes).includes(requestedSoldierType)) {
                    result.push([el[0], el[1].lastActivity]);
                }
            });
        result.sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[1]} : ${el[0]}`))
    }
}

hornetArmada(['6',
    '1 = BlackBeatles -> Soldier:2000',
    '2 = BlackBeatles -> Worker:1000',
    '5 = Rm -> Soldier:30000',
    '1 = Red_Ones -> Soldier:10000',
    '2 = Red_Ones -> Soldier:20000',
    '10 = RND -> Soldier:100000',
    '10\\Soldier',
    ''
])
hornetArmada(['7',
    '1000 = FurstL3gion -> Aisers:15000',
    '500 = FurstL3gion -> Aisers:1000',
    '200 = FurstL3gion -> Guards:2000',
    '2000 = Second!egion -> Guards:2000',
    '1500 = Second!egion -> Aisers:15000',
    '2500 = Second!egion -> Spies:2000',
    '1000 = Forked_Ones -> Guards:10000000',
    'Guards',
    ''
])