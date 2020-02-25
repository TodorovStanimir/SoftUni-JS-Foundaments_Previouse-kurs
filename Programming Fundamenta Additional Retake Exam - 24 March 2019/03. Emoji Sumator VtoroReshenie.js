function emojiSumator([string, searchedEmodji]) {
    let totalPower = 0;
    let multiplicator = 1;
    let pattern = /(?<=[\s]{1})(:[a-z]{4,}:)(?=[\s,.?!]{1})/g;
    searchedEmodji = searchedEmodji.split(':').map(el => String.fromCharCode(el)).join('');

    let foundEmojies = string.match(pattern);
    if (foundEmojies) {
        foundEmojies.forEach(emoji => {
            totalPower += emoji.slice(1, emoji.length - 1).split('').map(el => el.charCodeAt()).reduce((a, b) => a + b);
            if (emoji === `:${searchedEmodji}:`) {
                multiplicator = 2;
            }
        });
    }
    
    console.log(foundEmojies ? `Emojis found: ${foundEmojies.join(', ')}\nTotal Emoji Power: ${totalPower * multiplicator}` : `Total Emoji Power: ${totalPower * multiplicator}`)
}
emojiSumator(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
]);