roliTheCoder = (input) => {
    let patternId = /[\d]+/g;
    let patternName = /^[#][\w\W]+$/g;
    let patternParticipant = /^[@][a-z0-9'-]+$/gi
    let events = {};
    for (let line of input) {
        if (line === 'Time for Code') {
            break;
        }
        let tokens = line.split(' ').filter(el => el !== '');
        let id = tokens.shift();
        let idIsCorrect = false;
        if (id.match(patternId)) {
            idIsCorrect = true;
            id = Number(id);
        }
        let name = tokens.shift().trim();
        let nameIsCorrect = false;
        if (name.match(patternName)) {
            nameIsCorrect = true;
            name = name.substring(1)
        }
        let participants = [];
        tokens.forEach(participant => {
            if (participant.match(patternParticipant) && !participants.includes(participant)) {
                participants.push(participant);
            }
        });
        if (idIsCorrect && nameIsCorrect && !events[id]) {
            events[id] = { name, length: participants.length, participants }
        } else if (idIsCorrect && nameIsCorrect && events[id].name === name) {
            let newParticipants = events[id].participants;
            participants.forEach(participant => {
                if (!newParticipants.includes(participant)) {
                    newParticipants.push(participant);
                }
            })
                events[id] = { name, length: newParticipants.length, participants: newParticipants };
        }
    }

    Object.entries(events)
        .sort((a, b) => b[1].length - a[1].length || a[1].name.localeCompare(b[1].name))
        .forEach(event => {
            console.log(`${event[1].name} - ${event[1].length}`)
            event[1].participants.sort((a, b) => a.localeCompare(b)).forEach(participant => console.log(`${participant}`));
        });
}
roliTheCoder(['1     #Beers    @roli    @trophon    @alice',
    '2 #GameDevMeetup @sino @valyo',
    '3 #Karaoke @nakov @royal @ROYAL @ivo',
    'Time for Code'
]);
roliTheCoder(['1 #Beers @roli @trophon @alice',
    '2 #GameDevMeetup @sino @valyo',
    '1 #Beers2 @nakov @royal @ROYAL @ivo',
    '1 #Beers @roli @trophon @alice @sino',
    '3 #Rakia',
    '3 #Rakia @Stanimir',
    'Time for Code'
])