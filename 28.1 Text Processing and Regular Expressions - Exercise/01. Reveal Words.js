function revealWords(words, templates) {
    words = words.split(', ');
    templates = templates.split(' ');

    for (let word of words) {
        for (let index in templates) {
            if (templates[index] === '*'.repeat(word.length)) {
                templates[index] = word;
            }
        }
    }
    let output = templates.join(' ');
    console.log(output);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');