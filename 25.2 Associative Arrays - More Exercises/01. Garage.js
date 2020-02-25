function garage(params) {
    let garages = new Map();

    for (currentCar of params) {
        let [garage, car] = currentCar.split(' - ');
        let carParametres = [];
        car = car.split(', ');
        for (let parameterCar of car) {
            let [key, value] = parameterCar.split(': ');
            carParametres.push(`${key} - ${value}`);
        }

        if (garages.has(garage)) {
            let currentStation = garages.get(garage);
            currentStation.push(carParametres);
            garages.set(garage, currentStation);
        } else {
            garages.set(garage, [carParametres]);
        }
    }
    let output = [...(garages.entries())];

    for (let garage of output) {
        console.log(`Garage № ${garage[0]}`);
        garage[1].forEach(element => {
            console.log(`--- ${element.join(', ')}`)
        });
    }
}
garage(['4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol'
]);