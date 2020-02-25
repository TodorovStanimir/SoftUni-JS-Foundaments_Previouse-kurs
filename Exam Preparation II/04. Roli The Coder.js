roliTheCoder = (input) => {
    let events = new Map();

    while ((event = input.shift()) !== 'Time for Code') {
        let formatEventIsCorrect = true;
        let participiants = [];
        let eventNumber = '';
        let eventName = '';
        if (event.includes('#')) {
            if (!event.includes('@') || (event.includes('@') && event.indexOf('#') < event.indexOf('@'))) {
                let tokens = event.split(' #');
                eventNumber = tokens[0].trim();
                tokens = tokens[1].split(' ').map(element => element.trim());
                tokens = tokens.filter(element => element !== '')
                eventName = tokens.shift().trim();

                // tokens=tokens.map(element => '@'.concat(element))
                tokens.forEach(element => {
                    if (!element.includes('@')) {
                        formatEventIsCorrect = false;
                    }
                })
                tokens.forEach(participian => {
                    let iscorrectparticipian = true;
                    let currentParticipian = ''
                    if (participian.includes('@')) {
                        for (let i = 1; i < participian.length; i++) {
                            if ((97 <= participian.toLowerCase().charCodeAt(i) && participian.toLowerCase().charCodeAt(i) <= 122) ||
                                (48 <= participian.toLowerCase().charCodeAt(i) && participian.toLowerCase().charCodeAt(i) <= 57) ||
                                participian.charCodeAt(i) === 39 || participian.charCodeAt(i) === 45) {
                                currentParticipian += participian[i]
                            } else {
                                iscorrectparticipian = false;
                            }
                        }
                    } else {
                        iscorrectparticipian = false;
                    }
                    if (iscorrectparticipian && !participiants.includes(currentParticipian)) {
                        participiants.push(currentParticipian.trim());
                    }
                });
            }
        } else {
            formatEventIsCorrect = false;
        }
        if (eventNumber !== '' && eventName !== '' && formatEventIsCorrect) {
            if (!events.has(eventNumber)) {
                events.set(eventNumber, [eventName, participiants]);
            } else {
                if (events.get(eventNumber)[0] === eventName) {
                    for (let i = 0; i < participiants.length; i++) {
                        if (!events.get(eventNumber)[1].includes(participiants[i])) {
                            events.get(eventNumber)[1].push(participiants[i]);
                        }
                    }
                }
            }
        }
    }
    let output = [...events];
    output.sort((a, b) => {
        if (a[1][1].length > b[1][1].length || a[1][1].length < b[1][1].length) {
            return b[1][1].length - a[1][1].length;
        } else {
            return a[1][0].localeCompare(b[1][0]);
        }
    });
    output.forEach(element => {
        element[1][1].sort((a, b) => {
            return a.localeCompare(b);
        })
    })

    output.forEach(element => {
        console.log(`${element[1][0]} - ${element[1][1].length}`);
        element[1][1].forEach(participiant => console.log(`@${participiant}`));
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
    'Time for Code'
])