function cookingMasterclass(input) {
    let budget = parseFloat(input.shift());
    let countStudents = parseInt(input.shift());
    let priceFlour = parseFloat(input.shift());
    let priceEgg = parseFloat(input.shift());
    let priceApron = parseFloat(input.shift());

    let apronsForBuying = Math.ceil(1.2 * countStudents);
    let flourForBuying = countStudents - Math.floor(countStudents / 5);

    let totalMoneyNeeded = flourForBuying * priceFlour + countStudents * 10 * priceEgg + apronsForBuying * priceApron;

    if (totalMoneyNeeded <= budget) {
        console.log(`Items purchased for ${totalMoneyNeeded.toFixed(2)}$.`);
    } else {
        let needeMoneyMore = totalMoneyNeeded - budget;
        console.log(`${needeMoneyMore.toFixed(2)}$ more needed.`);
    }
}
cookingMasterclass(['50', '2', '1.0', '0.10', '10.0']);
cookingMasterclass(['100', '25', '4.0', '1.0', '6.0']);