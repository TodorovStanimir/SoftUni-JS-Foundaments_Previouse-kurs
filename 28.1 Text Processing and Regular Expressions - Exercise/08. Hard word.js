function hardWord(letter) {
    let pattern = /[_]{1,}/g;
    let string = letter[0]
    let output = letter[0];

    while ((word = pattern.exec(string)) !== null) {
        letter[1].forEach(element => {
            if (element.length === word[0].length) {
                output = output.substr(0, word.index) + element + output.substr(word.index + element.length);
            }
        });
    }
    console.log(output);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);