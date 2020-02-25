function dungeonestDark(input) {
    let rooms = [];
    let health = 100;
    let coins = 0;
    let passedAllRooms = true;
    input[0].split('|').forEach(element => {
        let [monsterOrItem, number] = element.split(' ');
        rooms.push([monsterOrItem, Number(number)]);
    });
    for (let i = 1; i <= rooms.length; i++) {
        let room = rooms[i - 1]
        if (room[0] === 'potion') {
            healedFor = Math.min(100 - health, room[1]);
            health += healedFor;
            console.log(`You healed for ${healedFor} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (room[0] === 'chest') {
            coins += room[1];
            console.log(`You found ${room[1]} coins.`);
        } else {
            if (health - room[1] > 0) {
                health -= room[1];
                console.log(`You slayed ${room[0]}.`);
            } else {
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${i}`);
                passedAllRooms = false;
                break;
            }
        }
    }
    if (passedAllRooms) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}
dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);