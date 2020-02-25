hornetArmada = (arr) => {
    let countCommands = parseInt(arr[0]);
    let legions = new Map();
    let soldiers = new Map();

    for (let i = 1; i <= countCommands; i++) {
        let [lastActivity, legionName] = arr[i].split(' -> ')[0].split(' = ');
        let [soldierType, soldierCount] = arr[i].split(' -> ')[1].split(':')
        lastActivity = Number(lastActivity);
        soldierCount = Number(soldierCount);

        if (!legions.has(legionName)) {
            legions.set(legionName, [lastActivity, soldierType]);
            if (!soldiers.has(soldierType)) {
                soldiers.set(soldierType, [
                    [legionName, soldierCount]
                ]);
            } else {
                soldiers.get(soldierType).push([legionName, soldierCount]);
            }
        } else {
            if (legions.get(legionName)[0] < lastActivity) {
                legions.get(legionName)[0] = lastActivity;
                if (!legions.get(legionName).includes(soldierType)) {
                    legions.get(legionName).push(soldierType);
                }
            }
            if (!soldiers.has(soldierType)) {
                soldiers.set(soldierType, [
                    [legionName, soldierCount]
                ]);
            } else {
                soldiers.get(soldierType).forEach((element, index) => {
                    if (element[0] === legionName) {
                        soldierCount += element[1];
                        soldiers.get(soldierType)[index] = [legionName, soldierCount];
                    }
                });;
            }
        }
    }
    let lastCommand = arr[countCommands + 1];
    if (lastCommand.includes('\\')) {
        let [lastActivity, soldierType] = lastCommand.split('\\');
        lastActivity = Number(lastActivity);
        let output = [...soldiers.entries()]
            .filter(el => el[0] === soldierType)
        output = output[0][1].sort((a, b) => b[1] - a[1]);
        let result = [...legions.entries()]
        output.forEach(el => {
            result.forEach(element => {
                if (element[0] === el[0] && element[1] < lastActivity) {
                    console.log(`${el[0]} -> ${el[1]}`);
                }
            })
        });
    } else {
        let output = [...legions.entries()].sort((a, b) => b[1] - a[1]);
        let result = [...soldiers.entries()].forEach(element => {
            if (element[0] === lastCommand) {
                output.forEach(legion => {
                    element[1].forEach(el => {
                        if (el[0] === (legion[0])) {
                            console.log(`${legion[1]} : ${legion[0]}`);
                        }
                    })
                })
            }
        });
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
    '200 = F1rstL3gion -> Guards:2000',
    '2000 = Second!egion -> Guards:2000',
    '1500 = Second!egion -> Aisers:15000',
    '2500 = Second!egion -> Spies:2000',
    '1000 = Forked_Ones -> Guards:10000000',
    'Guards',
    ''
])