function softUniExamResults(input) {
    let languages = {};
    let users = {};

    function addLanguage(language) {
        !(language in languages) ? languages[language] = 1 : languages[language]++;
    }

    while ((line = input.shift()) !== 'exam finished') {
        let [userName, language, points] = line.split('-');
        points = Number(points);
        if (language === 'banned') {
            delete users[userName];
        } else if (!(userName in users)) {
            users[userName] = {
                points
            };
            addLanguage(language);
        } else if ((userName in users)) {
            if (users[userName].points < points) {
                users[userName].points = points
            }
            addLanguage(language);
        }
    }

    let resultUsers = Object.entries(users).sort((a, b) => {
        if (a[1].points > b[1].points || a[1].points < b[1].points) {
            return b[1].points - a[1].points;
        } else {
            return a[0].localeCompare(b[0])
        }
    });
    let resultLanguages = Object.entries(languages).sort((a, b) => {
        if (a[1] > b[1] || a[1] < b[1]) {
            return b[1] - a[1]
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    resultUsers.forEach((user, index) => {
        console.log(index === 0 ?
            `Results:\n${user[0]} | ${user[1].points}` :
            `${user[0]} | ${user[1].points}`);
    });
    resultLanguages.forEach((language, index) => {
        console.log(index===0 ?
            `Submissions:\n${language[0]} - ${language[1]}` :
            `${language[0]} - ${language[1]}`);
    });
}
softUniExamResults(['Pesho-Java-84',
    'Gosho-C#-70',
    'Gosho-C#-84',
    'Kiro-C#-94',
    'exam finished'
]);
softUniExamResults(['Pesho-Java-91',
    'Gosho-C#-84',
    'Kiro-JavaScript-90',
    'Kiro-C#-50',
    'Kiro-banned',
    'exam finished'
]);