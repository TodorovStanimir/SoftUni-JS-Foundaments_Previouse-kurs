function emojiSimulator(input) {
    let nameEmoji = '';
    let multiplicaterOfPower = 1;
    input[1].split(':').forEach(element => {
        nameEmoji += String.fromCharCode(element);
    });
    let totalPower = 0;
    let pattern = /(?:[\s]){1}(?<name>[:][a-z]{4,}[:])(?=[\s,.!?]{1})/g;
    let emojiFound = [];
    while ((emoji = pattern.exec(input[0])) !== null) {
        let emojiName = String(emoji[0]).substr(1);
        if (emojiName === `:${nameEmoji}:`) {
            multiplicaterOfPower = 2;
        }
        for (let i = 1; i < emojiName.length-1; i++) {
            totalPower += emojiName.charCodeAt(i);
        }
        emojiFound.push(emojiName)
    }
    if (emojiFound.length > 0) {
        console.log(`Emojis found: ${emojiFound.join(', ')}`);
        console.log(`Total Emoji Power: ${totalPower * multiplicaterOfPower}`);
    } else {
        console.log('Total Emoji Power: 0');
    }
}
emojiSimulator(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
]);