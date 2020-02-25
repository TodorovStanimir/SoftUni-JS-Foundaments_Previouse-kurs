function travelTime(input) {
    let output = new Map();

    for (let currentItem of input) {
        let [country, town, cost] = currentItem.split(' > ');
        cost = Number(cost);
        if (output.has(country)) {
            let existingTownsAndCosts = (output.get(country)).split(',');
            let existingTowns = [];
            for (let item of existingTownsAndCosts) {
                let existingTown = item.split(' -> ')[0];
                existingTowns.push(existingTown);
            }
            if (existingTowns.includes(town)) {
                let indexTown = existingTowns.indexOf(town);
                let existingCost = existingTownsAndCosts[indexTown].split(' -> ')[1];
                existingCost = Number(existingCost);
                if (existingCost > cost) {
                    existingTownsAndCosts.splice([indexTown], 1, `${town} -> ${cost}`);
                    existingTownsAndCosts = existingTownsAndCosts.join(',');
                    output.set(country, existingTownsAndCosts);
                }
            } else {
                let newTowns = output.get(country).concat(`,${town} -> ${cost}`)
                output.set(country, newTowns);
            }

        } else {
            output.set(country, `${town} -> ${cost}`);
        }
    }
    let result = [...(output.entries())];
    result.sort((a, b) => a[0].localeCompare(b[0]));

    for (let i in result) {
        let a = result[i][1].split(',');
        a.sort(myFunction);

        function myFunction(a, b) {
            let c = a.split(' -> ');
            c = Number(c[1]);
            let d = b.split(' -> ');
            d = Number(d[1]);
            if (c < d) {
                return -1;
            } else if (c > d) {
                return 1;
            }
        }
        result[i].splice(1, 1, a);
    }
    for (let i in result) {
        console.log(`${result[i][0]} -> ${(result[i][1]).join(' ')}`);
    }
}
travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);