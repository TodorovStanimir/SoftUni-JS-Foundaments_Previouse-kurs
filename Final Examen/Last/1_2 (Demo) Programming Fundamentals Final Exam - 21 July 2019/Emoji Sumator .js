function emojiSumator(input) {
    let foundEmojis = [];
    let totalPower = 0;
    let multiplicator = 1;
    let pattern = /(?<=[\s]{1}):(?<emoji>[a-z]{4,}):([\s,.!?]{1})/g;
    let string = input.shift();
    let emojiForMatching = input.shift().split(':').map(el => String.fromCharCode(Number(el))).join('');
    while ((emoji = pattern.exec(string)) !== null) {
        foundEmojis.push(`:${emoji.groups.emoji}:`);
        totalPower += emoji.groups.emoji.split('').map(el => Number(el.charCodeAt(0))).reduce((a, b) => a + b, 0)
    }
    if (foundEmojis.includes(`:${emojiForMatching}:`)) {
        totalPower *= 2;
    }
    console.log(foundEmojis.length > 0
        ? `Emojis found: ${foundEmojis.join(', ')}\nTotal Emoji Power: ${totalPower}`
        : `Total Emoji Power: ${totalPower}`);
}
emojiSumator(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110']);
emojiSumator(['In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
    '97:101:117:114'])