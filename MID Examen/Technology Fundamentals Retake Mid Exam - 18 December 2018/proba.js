function presentDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let positionOfSantaClouse = 0;
    while ((command = input.shift()) !== 'Merry Xmas!') {
        let sizeOfJump = Number(command.split(' ')[1]);
        positionOfSantaClouse += sizeOfJump;
        if (positionOfSantaClouse >= houses.length) {
            positionOfSantaClouse = positionOfSantaClouse % houses.length;
        }
        if (houses[positionOfSantaClouse] >= 2) {
            houses[positionOfSantaClouse] = houses[positionOfSantaClouse] - 2
        } else if (houses[positionOfSantaClouse] === 0) {
            console.log(`House ${positionOfSantaClouse} will have a Merry Christmas.`);
        }
    }
    let counOfFailedHouses = houses.filter(house => house !== 0).length;

    console.log(`Santa's last position was ${positionOfSantaClouse}.`);
    console.log(counOfFailedHouses === 0 
        ? 'Mission was successful.' 
        : `Santa has failed ${counOfFailedHouses} houses.`);
}
presentDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!']);
presentDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Merry Xmas!']);