function FuelMoney(distance, persons, priceFuel) {

    let quantityFuel = (distance / 100) * 7;
    quantityFuel += persons * 0.100;
    let neededMoney = quantityFuel * priceFuel;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
FuelMoney(260, 9, 2.49)
FuelMoney(90, 14, 2.88)