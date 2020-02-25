function softUniada(input) {
    let countries = {}

    for (let line of input) {
        if (line === 'END') {
            break;
        }

        let [country, contesant, points] = line.split(' -> ');
        points = Number(points);

        if (!(country in countries)) {
            countries[country] = {
                points: 0,
                contesants: []
            }
        }
        let contesantNotExistInAnotherCountry = true;
        let contesantNotExistInItsOwnCountry = true;
        let index = 0;
        Object.keys(countries).forEach(curCountry => {
            Object.values(countries[country].contesants).forEach((curContesant, ind) => {
                if (curCountry !== country && curContesant === contesant) {
                    contesantNotExist = false;
                }
                if (curCountry === country && curContesant.contesant === contesant) {
                    contesantNotExistInItsOwnCountry = false;
                    index = ind;
                }
            })
        });
        if (contesantNotExistInAnotherCountry) {
            countries[country].points += points;
            if (contesantNotExistInItsOwnCountry) {
                countries[country].contesants.push({ contesant, points });
            } else {
                Object.values(countries[country].contesants)[index].points += points;
            }
        }
    }

    Object.entries(countries).sort((a, b) => b[1].points - a[1].points).forEach(country => {
        console.log(`${country[0]}: ${country[1].points}`);
        country[1].contesants.forEach(contesant => {
            let [nameContesant, pointsContesant] = Object.values(contesant);
            console.log(` -- ${nameContesant} -> ${pointsContesant}`)
        });
    });
}
softUniada(['Bulgaria -> Ivan Ivanov -> 25',
    'Germany -> Otto Muller -> 4',
    'England -> John Addams -> 10',
    'Bulgaria -> Georgi Georgiev -> 18',
    'England -> Valteri Bottas -> 8',
    'Bulgaria -> Georgi Georgiev -> 6',
    'END'
])
softUniada(['Norway -> Botel Audun -> 14',
    'Switzerland -> Alexis Andersson -> 18',
    'France -> Francois Arnaud -> 10',
    'France -> Pier Armand -> 22',
    'Bulgaria -> Peter Petrov -> 25',
    'France -> Francois Arnaud -> 3',
    'Bulgaria -> Peter Petrov -> 6',
    'END'
])