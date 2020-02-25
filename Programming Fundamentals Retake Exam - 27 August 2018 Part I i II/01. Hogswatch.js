function hogswatch(input) {
    let numberHomes = parseInt(input.shift());
    let numberPresents = parseInt(input.shift());
    let visitedHouse = 0;
    let timesHeWentBack = 0;
    let totalPresentsHeTookInAddition = 0;
    let currentPresents = numberPresents;
    for (let i = 0; i < numberHomes; i++) {
        let giftedPresents = input[i];
        visitedHouse++;
        if (currentPresents - giftedPresents >= 0) {
            currentPresents -= giftedPresents;
        } else {
            timesHeWentBack++;
            let presentsHeTookInAddition = parseInt(numberPresents / visitedHouse) * (numberHomes - visitedHouse) + (giftedPresents - currentPresents);
            totalPresentsHeTookInAddition += presentsHeTookInAddition;
            currentPresents += (presentsHeTookInAddition - giftedPresents);
        }
    }
    console.log(timesHeWentBack === 0 ? currentPresents : `${timesHeWentBack}\n${totalPresentsHeTookInAddition}`);

}
hogswatch([5, 20, 2, 1, 3, 9, 5]);
hogswatch([4, 20, 12, 10, 3, 9]);
hogswatch([5, 10, 4, 5, 3, 4, 5])