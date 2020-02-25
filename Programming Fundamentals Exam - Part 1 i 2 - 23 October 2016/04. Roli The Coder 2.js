function roliTheCoder(input) {
    let events = {};
    let pattern = /^(?<id>[\d]+)[\s]+#(?<name>[^\s]+)\s*(?<particip>[@A-Za-z\s]+)*$/g;
    for (let line of input) {
        if (line === 'Time for Code') {
            break;
        }
        if (line.match(pattern)) {
            let tokens = pattern.exec(line);
            let id = Number(tokens.groups.id);
            let event = tokens.groups.name;
            let participants = '';
            if (tokens.groups.particip) {
                participants = [...new Set(tokens.groups.particip.split(/\s+/g).filter(el => el !== ''))];
            }
            if (!(id in events)) {
                events[id] = {
                    name: event,
                    count: participants.length,
                    participants
                }
            } else {
                if (events[id].name === event) {
                    let currentParticipants = events[id].participants.slice(0)
                    participants.forEach(participant => {
                        if (!currentParticipants.includes(participant)) {
                            currentParticipants.push(participant)
                        }
                    })
                    events[id].participants = currentParticipants;
                    events[id].count = currentParticipants.length;
                }
            }
        }
    }
    Object.entries(events)
        .sort((a, b) => b[1].count - a[1].count || a[1].name.localeCompare(b[1].name))
        .forEach(event => {
            console.log(`${event[1].name} - ${event[1].count}`)
            if (event[1].participants.length > 0) {
                event[1].participants.sort((a, b) => a.localeCompare(b)).forEach(participant => console.log(participant))
            }
        })
}
roliTheCoder(['1 #Beers   @roli  @roli @trophon   @alice @alice ',
    '2 #GameDevMeetup @sino @valyo',
    '3 #Karaoke @nakov @royal @ROYAL @ivo',
    'Time for Code']);
roliTheCoder(['1 #Beers @roli @trophon @alice',
    '2 #GameDevMeetup @sino @valyo',
    '1 #Beers2 @nakov @royal @ROYAL @ivo',
    '1 #Beers  @roli @trophon @alice @sino',
    '3 #Rakia',
    'Time for Code']);
