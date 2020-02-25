function mobaChalenger(input) {
    let chalenger = new Map();
    while ((line = input.shift()) !== 'Season end') {
        if (!line.includes(' vs ')) {
            let [name, position, skill] = line.split(' -> ');
            skill = Number(skill);
            if (!chalenger.has(name)) {
                chalenger.set(name, [skill, [position, skill]]);
            } else {
                let posittionNotExist = true;
                chalenger.get(name).forEach((el, i) => {
                    if (el[0] === position) {
                        posittionNotExist = false;
                        let currentskill = el[1];
                        let totalSkill = chalenger.get(name)[0];
                        if (currentskill < skill) {
                            chalenger.get(name)[i][1] = skill;
                            chalenger.get(name)[0] = totalSkill + skill - currentskill;
                        }
                    }
                });
                if (posittionNotExist) {
                    chalenger.get(name).push([position, skill]);
                    let totalSkill = chalenger.get(name)[0];
                    chalenger.get(name)[0] = totalSkill + skill;
                }
            }
        } else {
            let [name1, name2] = line.split(' vs ');
            if (chalenger.has(name1) && chalenger.has(name2)) {
                let player1 = chalenger.get(name1);
                let player2 = chalenger.get(name2);
                // let theyHaveNotCommonPosition = true;
                for (let i = 1; i < player1.length; i++) {
                    for (let z = 1; z < player2.length; z++) {
                        if (player1[i][0] === player2[z][0]) {
                            theyHaveNotCommonPosition = false;
                            if (player1[0] > player2[0]) {
                                chalenger.delete(name2);
                            } else if (player1[0] < player2[0]) {
                                chalenger.delete(name1);
                            }
                        }
                    }
                }
            }
        }
    }
    let output = [...chalenger.entries()];
    output.sort((a, b) => {
        if (a[1][0] < b[1][0] || a[1][0] > b[1][0]) {
            return b[1][0] - a[1][0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    })
    for (let i = 0; i < output.length; i++) {
        let arrayForSorting = output[i][1].splice(1);
        arrayForSorting.sort((a, b) => {
            if (a[1] > b[1] || a[1] < b[1]) {
                return b[1] - a[1];
            } else {
                return a[0].localeCompare(b[0])
            }
        });        
        output[i][1].push(arrayForSorting);
    }

    output.forEach(el => {
        console.log(`${el[0]}: ${el[1][0]} skill`);
        el[1][1].forEach(position => {
            console.log(`- ${position[0]} <::> ${position[1]}`);

        });
    });
}
mobaChalenger(['Pesho -> Adc -> 400',
    'Gosho -> Jungle -> 300',
    'Stamat -> Mid -> 200',
    'Stamat -> Support -> 250',
    'Season end'
]);
mobaChalenger(['Pesho -> Adc -> 400',
    'Bush -> Tank -> 150',
    'Faker -> Mid -> 200',
    'Faker -> Support -> 250',
    'Faker -> Tank -> 250',
    'Pesho vs Faker',
    'Faker vs Bush',
    'Faker vs Hide',
    'Season end'
]);