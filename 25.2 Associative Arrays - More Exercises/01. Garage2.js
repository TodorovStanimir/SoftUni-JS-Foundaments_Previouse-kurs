function garage(params) {
    let garages = new Map();

    for (currentCar of params) {
        let [garage, car] = currentCar.split(' - ');
        // let carParametres = [];
        let newCar = new Map();
        car = car.split(', ');
        for (let parameterCar of car) {
            let [key, value] = parameterCar.split(': ');

            newCar.set(key, value);
        }

        if (garages.has(garage)) {
            let currentStation = garages.get(garage);
            currentStation.push(newCar);
            garages.set(garage, currentStation);
        } else {
            garages.set(garage, [newCar]);
        }
    }
    let output = [...(garages.entries())];

    for (let garage of output) {
        console.log(`Garage № ${garage[0]}`);
        garage[1].forEach(element => {
            let keys = [...(element.keys())];
            let values = [...(element.values())];
            let result = '';
            for (let i = 0; i < keys.length; i++) {
                if (result === '') {
                    result += keys[i] + ' - ' + values[i];
                } else {
                    result += ', ' + keys[i] + ' - ' + values[i];
                }
            }
            console.log(`--- ${result}`);
        });
    }
}
garage(['4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol'
]);