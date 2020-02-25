function softUniada(input) {
    let result = new Map();
    let commandLine = input.shift();
    let index = 0;
    let currentPoints = 0;
    while (commandLine !== 'END') {
        let [country, namePlayer, pointPlayer] = commandLine.split(' -> ');
        pointPlayer = Number(pointPlayer);
        if (!result.has(country)) {
            result.set(country, [pointPlayer, [
                [namePlayer, pointPlayer]
            ]]);
        } else {

            let playerNotExistInAnotherCountry = true;
            let playerNotExistInItsCountry = true;
            for (let checkingCountry of result) {
                // console.log(checkingCountry);
                if (checkingCountry[0] !== country) {
                    for (let i = 0; i < checkingCountry[1][1].length; i++) {
                        if (namePlayer === checkingCountry[1][1][i][0]) {
                            playerNotExistInAnotherCountry = false;
                        }
                    }
                } else {
                    for (let i = 0; i < checkingCountry[1][1].length; i++) {
                        if (namePlayer === checkingCountry[1][1][i][0]) {
                            index = i;
                            currentPoints = checkingCountry[1][1][i][1];
                            playerNotExistInItsCountry = false;
                        }
                    }
                }


            }

            if (playerNotExistInAnotherCountry) {
                if (playerNotExistInItsCountry) {
                    result.get(country)[0] += pointPlayer;
                    result.get(country)[1].push([namePlayer, pointPlayer]);
                } else {
                    result.get(country)[0] += pointPlayer;
                    result.get(country)[1][index][1] += pointPlayer;
                }
            }

        }

        commandLine = input.shift()
    }
    let output = [...result.entries()];
    output.sort((a, b) => {
        if (a[1][0] > b[1][0]) {
            return -1
        } else if (a[1][0] < b[1][0]) {
            return 1
        }
    });

    output.forEach(country => {
        console.log(`${country[0]}: ${country[1][0]}`);
        country[1][1].forEach(player => {
            console.log(` -- ${player[0]} -> ${player[1]}`);
        });
    });

}
// softUniada(['Bulgaria -> Ivan Ivanov -> 25',
//     'Germany -> Otto Muller -> 4',
//     'England -> John Addams -> 10',
//     'Bulgaria -> Georgi Georgiev -> 18',
//     'England -> Valteri Bottas -> 8',
//     'Bulgaria -> Georgi Georgiev -> 6',
//     'END'
// ])
softUniada(['Norway -> Botel Audun -> 14',
    'Switzerland -> Alexis Andersson -> 18',
    'France -> Francois Arnaud -> 10',
    'France -> Pier Armand -> 22',
    'Bulgaria -> Peter Petrov -> 25',
    'France -> Francois Arnaud -> 3',
    'Bulgaria -> Peter Petrov -> 6',
    'END'
])