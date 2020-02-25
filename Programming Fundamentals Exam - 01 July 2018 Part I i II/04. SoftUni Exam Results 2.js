function softuniExamResults(input) {
    let participants = {};
    let languages = {};
    while ((line = input.shift()) !== 'exam finished') {
        let [name, languageOrBanned, points] = line.split('-');
        if (languageOrBanned !== 'banned') {
            let language = languageOrBanned;
            points = Number(points);
            (!participants[name]) ? participants[name] = points : participants[name] = Math.max(points, participants[name]);
            (!languages[language]) ? languages[language] = 1 : languages[language]++
        } else {
            delete participants[name];
        }
    }

    Object.entries(participants).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach((participant, ind) => {
        console.log((ind === 0) ? `Results:\n${participant[0]} | ${participant[1]}` : `${participant[0]} | ${participant[1]}`);
    });

    Object.entries(languages).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach((language, ind) => {
        console.log((ind === 0) ? `Submissions:\n${language[0]} - ${language[1]}` : `${language[0]} - ${language[1]}`);
    });
}
softuniExamResults(['Pesho-Java-84',
    'Gosho-C#-70',
    'Gosho-C#-84',
    'Kiro-C#-94',
    'exam finished'
]);
softuniExamResults(['Pesho-Java-91',
    'Gosho-C#-84',
    'Kiro-JavaScript-90',
    'Kiro-C#-50',
    'Kiro-banned',
    'exam finished'
]);

// Results:
// Kiro | 94
// Gosho | 84
// Pesho | 84
// Submissions:
// C# - 3
// Java - 1
// Results:
// Pesho | 91
// Gosho | 84
// Submissions:
// C# - 2
// Java - 1
// JavaScript - 1