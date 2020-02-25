hornetArmada = (arr) => {
    let legions = {};
    let armyLegions = {};
    let countSoldiers = parseInt(arr.shift());
    for (let i = 0; i < countSoldiers; i++) {
        let tokens = arr.shift();
        let lastActivity = Number(tokens.split(' = ')[0]);
        let legionName = String(tokens.split(' = ')[1].split(' -> ')[0]).trim();
        let army = String(tokens.split(' = ')[1].split(' -> ')[1].split(':')[0]).trim();
        let count = Number(tokens.split(' = ')[1].split(' -> ')[1].split(':')[1]);
        if (!(legionName in legions)) {
            legions[legionName] = lastActivity;
        } else {
            if (legions[legionName] < lastActivity) {
                legions[legionName] = lastActivity;
            }
        }
        if (!(army in armyLegions)) {
            armyLegions[army] = {};
            armyLegions[army][legionName] = count;
        } else {
            if (!(legionName in armyLegions[army])) {
                armyLegions[army][legionName] = count;
            } else {
                armyLegions[army][legionName] += count;
            }
        }
    }
    let lastCommand = arr.shift();
    if (lastCommand.includes('\\')) {
        let [activity, soldierType] = lastCommand.split('\\');
        activity = Number(activity);
        Object.entries(armyLegions[soldierType])
            .filter(army => legions[army[0]] < activity)
            .sort((a, b) => b[1] - a[1])
            .forEach(army => console.log(`${army[0]} -> ${army[1]}`));
    } else {
        let soldierType = lastCommand;
        Object.entries(legions)
            .filter(legion => Object.keys(armyLegions[soldierType]).includes(legion[0]))
            .sort((a, b) => b[1] - a[1])
            .forEach(legion => console.log(`${legion[1]} : ${legion[0]}`))
    }
}
hornetArmada(['6',
    '1 = BlackBeatles -> Soldier:2000',
    '2 = BlackBeatles -> Worker:1000',
    '1 = Red_Ones -> Soldier:10000',
    '5 = Rm -> Soldier:30000',
    '2 = Red_Ones -> Soldier:20000',
    '10 = RND -> Soldier:100000',
    '10\\Soldier',
    ''
])
hornetArmada(['7',
    '1000 = F1rstL3gion -> Aisers:15000',
    '500 = F1rstL3gion -> Aisers:1000',
    '2500 = F1rstL3gion -> Guards:2000',
    '2000 = Second!egion -> Guards:2000',
    '1500 = Second!egion -> Aisers:15000',
    '2500 = Second!egion -> Spies:2000',
    '1000 = Forked_Ones -> Guards:10000000',
    'Aisers',
    ''
])