function emoticonFinder(string) {
    let pattern = /\B[:]+[A-Za-z)!@#$%^&*(),.?":{}|<>]{1}\b/g
    let emoticons = [];

    while ((emoticon = pattern.exec(string)) != null) {
        emoticons.push(emoticon[0])
    }
    emoticons.forEach(emoticon => {
        console.log(emoticon);
    });
}
emoticonFinder('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)')


function emoticonFinder(string) {
    let pattern = /\B[:][A-Za-z)]$|\B[:][A-Za-z)]\b/g
    let emoticons = [];

    while ((emoticon = pattern.exec(string)) != null) {
        emoticons.push(emoticon[0])
    }
    emoticons.forEach(emoticon => {
        console.log(emoticon);
    });
}
emoticonFinder('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)')