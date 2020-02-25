function softUniKaraoke(input) {
    let listParticipants = input.shift().split(', ');
    let listAvailableSongs = input.shift().split(', ');
    let participants = {};
    for (let line of input) {
        if (line === 'dawn') {
            break;
        }
        let [participant, song, award] = line.split(', ');
        if (listParticipants.includes(participant) && listAvailableSongs.includes(song)) {
            if (!(participant in participants)) {
                participants[participant] = { countAwards: 0, awards: [] }
            }
            if (!participants[participant].awards.includes(award)) {
                participants[participant].awards.push(award);
                participants[participant].countAwards++;
            }
        }
    }
    let output = Object.entries(participants);
    if (output.length > 0) {
        output.sort((a, b) => b[1].countAwards - a[1].countAwards || a[0].localeCompare(b[0]))
            .forEach(participant => {
                console.log(`${participant[0]}: ${participant[1].countAwards} awards`);
                participant[1].awards.sort((a, b) => a.localeCompare(b)).forEach(award => console.log(`--${award}`));
            });
    } else {
        console.log('No awards')
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