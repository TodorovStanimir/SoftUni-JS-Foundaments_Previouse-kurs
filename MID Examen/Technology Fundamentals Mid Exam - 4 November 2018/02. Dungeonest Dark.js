function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let rooms = input.shift().split('|');
    let goTroughAllRoom = true;
    let nameMonster = '';

    for (let room = 0; room < rooms.length; room++) {
        let item = rooms[room].split(' ');
        if (item[0] === 'potion') {
            let healthInRoom = parseInt(item[1]);
            let increasedHealth = 0;
            if (100 - health >= healthInRoom) {
                increasedHealth = healthInRoom;
            } else {
                increasedHealth = 100 - health;
            }
            health += increasedHealth
            console.log(`You healed for ${increasedHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item[0] === 'chest') {
            let foundCoins = parseInt(item[1]);
            coins += foundCoins;
            console.log(`You found ${foundCoins} coins.`);
        } else {
            nameMonster = item[0];
            let powerMonster = item[1];
            if (health - powerMonster > 0) {
                health -= powerMonster;
                console.log(`You slayed ${nameMonster}.`);
            } else {
                console.log(`You died! Killed by ${nameMonster}.`);
                console.log(`Best room: ${room+1}`);
                goTroughAllRoom = false;
                break
            }
        }
    }
    if (goTroughAllRoom) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);