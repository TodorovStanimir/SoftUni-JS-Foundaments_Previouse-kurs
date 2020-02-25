function softUniKaraoke(input) {
    let participantList = input.shift().split(', ');
    let songsList = input.shift().split(', ');
    let result = {};

    while ((line = input.shift()) !== 'dawn') {
        let [nameParticipant, song, awards] = line.split(', ');
        if (participantList.includes(nameParticipant) && songsList.includes(song)) {
            if (!(nameParticipant in result)) {
                result[nameParticipant] = []
            }
            if (!(Object.values(result[nameParticipant]).includes(awards))) {
                result[nameParticipant].push(awards);
            }
        }
    }
    
    if (Object.entries(result).length > 0) {
        Object.entries(result)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(participant => {
                console.log(`${participant[0]}: ${participant[1].length} awards`);
                participant[1]
                    .sort((a, b) => a.localeCompare(b))
                    .forEach(award => {
                        console.log(`--${award}`);
                    })
            });
    } else {
        console.log('No awards');
    }
}
softUniKaraoke(['Trifon, Vankata, Gesha',
    'Dragana - Kukavice, Bon Jovi - It\'s my life, Lorde - Royals',
    'Gesha, Bon Jovi - It\'s my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn']);
softUniKaraoke(['Gesha',
    'Bon Jovi - It\'s my life',
    'Gesha, Bon Jovi - It\'s my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn']);
softUniKaraoke(['Sino', 'Vasko Naidenov - Nova Godina', 'dawn']);