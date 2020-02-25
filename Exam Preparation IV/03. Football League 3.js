footbalLeague = (input) => {
    let key = input.shift().split('').map(el => `\\${el}{1}`).join('');
    let regexName = new RegExp(`(?:(${key}){1,})(?<name>[A-Za-z]+?)(?=\\1)`, 'g');
    let regexScores = new RegExp('\\d+:\\d+', 'g');
    let teams = {};
    for (let line of input) {
        if (line === 'final') {
            break;
        }
        let [scores1, scores2] = line.match(regexScores)[0].split(':').map(Number);
        let numberTeam = 1;
        let team1 = '';
        let team2 = '';
        while ((team = regexName.exec(line)) !== null) {
            let nameTeam = team.groups.name.split('').reverse().map(el => el.toUpperCase()).join('');
            if (!teams[nameTeam]) {
                teams[nameTeam] = {
                    points: 0,
                    scores: 0
                }
            }
            numberTeam === 1 ? team1 = nameTeam : team2 = nameTeam
            numberTeam++;
        }
        if (scores1 > scores2) {
            teams[team1].points += 3;
            teams[team1].scores += scores1;
            teams[team2].scores += scores2;
        } else if (scores2 > scores1) {
            teams[team2].points += 3;
            teams[team2].scores += scores2;
            teams[team1].scores += scores1;
        } else {
            teams[team1].points += 1;
            teams[team1].scores += scores1;
            teams[team2].points += 1;
            teams[team2].scores += scores2;
        }
    }
    console.log('League standings:')
    Object.entries(teams).sort((a, b) => b[1].points - a[1].points || a[0].localeCompare(b[0])).forEach((team, ind) => {
        console.log(`${ind + 1}. ${team[0]} ${team[1].points}`);
    });
    console.log('Top 3 scored goals:')
    Object.entries(teams).sort((a, b) => b[1].scores - a[1].scores || a[0].localeCompare(b[0])).forEach((team, ind) => {
        if (ind <= 2) { console.log(`- ${team[0]} -> ${team[1].scores}`); }
    });
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