footbalLeague = (input) => {
    let keyString = input.shift();
    let result = {};

    while ((line = input.shift()) !== 'final') {
        let firstTeamPoints = 0;
        let secondTeamPoints = 0;
        let teams = line.substring(line.indexOf(keyString) + keyString.length, line.lastIndexOf(keyString))
        let firstTeamName = teams
            .substring(0, teams.indexOf(keyString))
            .split('')
            .reverse()
            .map(el => el.toUpperCase()).join('');
        let secondTeamName = teams
            .substring(teams.lastIndexOf(keyString) + keyString.length, teams.length)
            .split('')
            .reverse()
            .map(el => el.toUpperCase()).join('');

        let pattern = /\d+:\d+/g;
        let [firstTeamGoals, secondTeamGoals] = line.match(pattern)[0].split(':').map(Number);

        if (firstTeamGoals > secondTeamGoals) {
            firstTeamPoints = 3;
        } else if (firstTeamGoals < secondTeamGoals) {
            secondTeamPoints = 3;
        } else {
            firstTeamPoints = 1;
            secondTeamPoints = 1;
        }
        if (!result.hasOwnProperty(firstTeamName)) {
            result[firstTeamName] = {};
            result[firstTeamName] = {
                points: firstTeamPoints,
                goals: firstTeamGoals,
            }
        } else {
            currentsGoals = result[firstTeamName].goals + firstTeamGoals;
            currentsPoints = result[firstTeamName].points + firstTeamPoints;
            result[firstTeamName] = {
                points: currentsPoints,
                goals: currentsGoals,
            }
        }
        if (!result.hasOwnProperty(secondTeamName)) {
            result[secondTeamName] = {};
            result[secondTeamName] = {
                points: secondTeamPoints,
                goals: secondTeamGoals,
            }
        } else {
            currentsGoals = result[secondTeamName].goals + secondTeamGoals;
            currentsPoints = result[secondTeamName].points + secondTeamPoints;
            result[secondTeamName] = {
                points: currentsPoints,
                goals: currentsGoals,
            }
        }
    }
    let output = Object.entries(result);
    output.forEach(element => {
        element[1] = Object.entries(element[1]);
    })
    output.sort((a, b) => {
        if (a[1][0][1] > b[1][0][1] || a[1][0][1] < b[1][0][1]) {
            return b[1][0][1] - a[1][0][1]
        } else {
            return a[0].localeCompare(b[0]);
        }
    })
    console.log('League standings:');
    output.forEach((team, index) => {
        console.log(`${index+1}. ${team[0]} ${team[1][0][1]}`);

    })
    output.sort((a, b) => {
        if (a[1][1][1] > b[1][1][1] || a[1][1][1] < b[1][1][1]) {
            return b[1][1][1] - a[1][1][1]
        } else {
            return a[0].localeCompare(b[0]);
        }
    })
    console.log('Top 3 scored goals:');
    let counter = 0
    for (let team of output) {
        console.log(`- ${team[0]} -> ${team[1][1][1]}`);
        counter++;
        if (counter === 3) {
            break;
        }
    }
}
footbalLeague(['??',
    '??ecnarF?? ??kramneD?? 0:0',
    '..??airagluB??32 ??dnalgnE??gf 3:2',
    'Fg??NIAPS?? fgdrt%#$??YNAMREG??gtr 3:4',
    '??eCnArF?? >>??yLATi??<< 2:2',
    'final'
])
footbalLeague(['KZL',
    'fdKZLairagluBKZL KZLkramneDKZLll 2:0',
    'kzljjjKZLAiRaGluBKZL KZLylATIKZLkk 1:1',
    'KZLkRamnedKZL KZLYlatiKZL 4:4',
    'final'
])