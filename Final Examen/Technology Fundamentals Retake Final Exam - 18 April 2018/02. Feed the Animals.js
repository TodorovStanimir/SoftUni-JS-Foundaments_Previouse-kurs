function feedTheAnimals(animals) {
    let hungryAnimals = new Map();
    let areas = new Map();
    let command = '';
    while (command !== 'Last Info') {
        [command, nameAnimal, dailyFoodLimit, area] = command.split(':');
        dailyFoodLimit = parseInt(dailyFoodLimit);
        if (command === 'Add') {
            if (!hungryAnimals.has(nameAnimal)) {
                hungryAnimals.set(nameAnimal, dailyFoodLimit);
                if (!areas.has(area)) {
                    areas.set(area, [nameAnimal]);
                } else {
                    areas.get(area).push(nameAnimal);
                }
            } else {
                hungryAnimals.set(nameAnimal, hungryAnimals.get(nameAnimal) + dailyFoodLimit);
            }

        } else if (command === 'Feed') {
            if (hungryAnimals.has(nameAnimal)) {
                if (hungryAnimals.get(nameAnimal) <= dailyFoodLimit) {
                    hungryAnimals.delete(nameAnimal);
                    areas.get(area).splice(areas.get(area).indexOf(nameAnimal), 1);
                    console.log(`${nameAnimal} was successfully fed`);
                } else {
                    hungryAnimals.set(nameAnimal, hungryAnimals.get(nameAnimal) - dailyFoodLimit);
                }
            }
        }
        command = animals.shift();
    }

    let outputAnimals = [...hungryAnimals.entries()];
    outputAnimals.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] === b[1]) {
            for (let index = 0; index < Math.max(a[0].length, b[0].length); index++) {
                if (a[0][index] > b[0][index]) {
                    return 1;
                } else if (a[0][index] < b[0][index]) {
                    return -1;
                }
            }
        }
    });

    let outputAreas = [...areas.entries()];
    outputAreas.sort((a, b) => {
        if (a[1].length > b[1].length) {
            return -1;
        } else if (a[1].length < b[1].length) {
            return 1;
        }
    });
    console.log('Animals:');
    outputAnimals.forEach(el => {
        console.log(`${el[0]} -> ${el[1]}g`);
    });
    console.log('Areas with hungry animals:');
    outputAreas.forEach(el => {
        if (el[1].length > 0) {
            console.log(`${el[0]} : ${el[1].length}`);
        }
    });
}
feedTheAnimals(['Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info'
]);
feedTheAnimals(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info'
]);