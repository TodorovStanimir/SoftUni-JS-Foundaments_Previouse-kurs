function presentDelivery(input) {
    let homes = input.shift().split('@').map(Number);
    let position = 0;

    while ((line = input.shift()) !== 'Merry Xmas!') {
        lengthJump = Number(line.split(' ')[1])
        position += lengthJump;
        if  (position >=homes.length) {
            position = position % homes.length;
        }
        if (homes[position] === 0) {
            console.log(`House ${position} will have a Merry Christmas.`);
        } else {
            homes[position] = homes[position] - 2;
        }
    }
    let failedHouses = homes.filter(house => house !== 0).length;
    if (failedHouses > 0) {
        missionCompleted = false;
    }
    console.log(`Santa's last position was ${position}.`);
    console.log(failedHouses !== 0 ? `Santa has failed ${failedHouses} houses.` : 'Mission was successful.');
}
presentDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!']);
presentDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Merry Xmas!']);