function hogswatch(input) {
    let numberHouses = parseInt(input.shift());
    let initialPresents = parseInt(input.shift());
    let currentPresents = initialPresents;
    let wentBack = 0;
    let additionalPresents = 0;

    for (let house = 1; house <= numberHouses; house++) {
        let presentInCurrentHouse = parseInt(input.shift());
        if (presentInCurrentHouse <= currentPresents) {
            currentPresents -= presentInCurrentHouse
        } else {
            while (presentInCurrentHouse > currentPresents) {
                wentBack++;
                additionalPresents += parseInt(initialPresents / house )* (numberHouses - house) + presentInCurrentHouse - currentPresents;
                currentPresents += parseInt(initialPresents / house )* (numberHouses - house) + presentInCurrentHouse - currentPresents;
            }
            currentPresents -= presentInCurrentHouse;
        }
    }
    if (wentBack>0) {
        console.log(wentBack);
        console.log(additionalPresents);
    } else {
        console.log(currentPresents);
    }
}
hogswatch([5, 20, 2, 1, 3, 9, 5]);
hogswatch([4, 20, 12, 10, 3, 9]);
hogswatch([5, 10, 4, 5, 3, 4, 5])