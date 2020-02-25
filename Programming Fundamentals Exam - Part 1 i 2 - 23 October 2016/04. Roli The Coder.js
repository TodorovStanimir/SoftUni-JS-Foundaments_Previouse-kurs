function roliTheCoder(input) {
    let output = {};

    while ((line = input.shift()) !== 'Time for Code') {
        let eventIsCorrect = true;
        let nameIsCorrect = true;
        let tokens = line.split(' ').filter(element => element.length !== 0);
        let id = Number(tokens[0]);
        let eventName = String(tokens[1]);
        if (eventName.startsWith('#')) {
            eventName = eventName.split('').filter(word => word !== '#').join('');
        } else {
            eventIsCorrect = false;
        }
        for (event in output) {
            if (output[event].eventName === eventName
                && Number(event) !== id) {
                nameIsCorrect = false;
            }
        }
        let participants = tokens.slice(2)
            .filter(participant => participant.startsWith('@'))

        participants = participants
            .filter((participant, index) => {
                if (participants.indexOf(participant) === index
                    && participant.match(/^(@[a-zA-Z0-9'-]+)$/g)[0]) {
                    return true;
                } else {
                    return false;
                }
            });

        if (eventIsCorrect && nameIsCorrect) {
            if (!(id in output)) {
                output[id] = {
                    eventName,
                    participants
                }
            } else {
                if (output[id].eventName === eventName) {
                    if (participants.length) {
                        participants.forEach(participant => {
                            if (!(output[id].participants.includes(participant))) {
                                output[id].participants.push(participant)
                            }
                        });
                    } else {
                        output[id].participants = '';
                    }
                }
            }
        }
    }
    Object.entries(output).sort((a, b) => {
        if (a[1].participants.length > b[1].participants.length || a[1].participants.length < b[1].participants.length) {
            return b[1].participants.length - a[1].participants.length;
        } else {
            a[1].eventName.localeCompare(b[1].eventName);
        }
    })
        .forEach(event => {
            console.log(`${event[1].eventName} - ${event[1].participants.length}`);
            if (event[1].participants.length) {
                event[1].participants
                    .sort((a, b) => a.localeCompare(b))
                    .forEach(participant => console.log(`${participant}`));
            }
        })
}
roliTheCoder(['1 #Beers   @roli  @roli @trophon   @alice',
    '2 #GameDevMeetup @sino @valyo',
    '3 #Karaoke @nakov @royal @ROYAL @ivo',
    'Time for Code']);
roliTheCoder(['1 #Beers @roli @trophon @alice',
    '2 #GameDevMeetup @sino @valyo',
    '1 #Beers2 @nakov @royal @ROYAL @ivo',
    '1 #Beers  @roli @trophon @alice @sino',
    '3 #Rakia',
    'Time for Code']);
