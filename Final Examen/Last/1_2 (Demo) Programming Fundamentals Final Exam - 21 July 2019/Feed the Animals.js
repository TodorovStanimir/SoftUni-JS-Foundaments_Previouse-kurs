function feedTheAnimals(input) {
    let animals = {};
    let areas = {};
    for (let line of input) {
        if (line === 'Last Info') {
            break;
        }
        let [command, animal, dailyFoodLimitOrFood, area] = line.split(':');
        if (command === 'Add') {
            let dailyFoodLimit = Number(dailyFoodLimitOrFood);
            if (!animals[animal]) {
                animals[animal] = dailyFoodLimit;
                if (!areas[area]) {
                    areas[area] = 1;
                } else {
                    areas[area]++;
                }
            } else {
                animals[animal] += dailyFoodLimit;
            }
        } else if (command === 'Feed') {
            let food = Number(dailyFoodLimitOrFood);
            if (animals[animal]) {
                if (animals[animal] <= food) {
                    delete animals[animal];
                    areas[area]--;
                    console.log(`${animal} was successfully fed`)
                } else {
                    animals[animal] -= food;
                }
            }
        }
    }
    console.log('Animals:')
    Object.entries(animals).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(animal => {
        console.log(`${animal[0]} -> ${animal[1]}g`)
    });
    console.log('Areas with hungry animals:')
    Object.entries(areas).sort((a, b) => b[1] - a[1]).forEach(animal => {
        if (animal[1] > 0) {
            console.log(`${animal[0]} : ${animal[1]}`);
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
    'Last Info'])
feedTheAnimals(['Add:Bonie:3490:RiverArea',
    'Add:Sam:5430:DeepWoodsArea',
    'Add:Bonie:200:RiverArea',
    'Add:Maya:4560:ByTheCreek',
    'Feed:Maya:2390:ByTheCreek',
    'Feed:Bonie:3500:RiverArea',
    'Feed:Johny:3400:WaterFall',
    'Feed:Sam:5500:DeepWoodsArea',
    'Last Info'])