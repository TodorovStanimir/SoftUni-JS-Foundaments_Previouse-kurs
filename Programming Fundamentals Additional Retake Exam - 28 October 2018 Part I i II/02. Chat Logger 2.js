function chatLogger(input) {
    let result = [];
    while ((line = input.shift()) !== 'end') {
        let tokens = line.split(' ');
        if (tokens[0] === 'Chat') {
            result.push(tokens[1]);
        } else if (tokens[0] === 'Delete' && result.indexOf(tokens[1]) !== -1) {
                result.splice(result.indexOf(tokens[1]), 1);
        } else if (tokens[0] === 'Edit' && result.indexOf(tokens[1]) !== -1) {
                result.splice(result.indexOf(tokens[1]), 1, tokens[2]);
        } else if (tokens[0] === 'Pin' && result.indexOf(tokens[1]) !== -1) {
                result.splice(result.indexOf(tokens[1]), 1);
                result.push(tokens[1])
        } else if (tokens[0] === 'Spam') {
            result.push(...tokens.slice(1))
        }
    }
    console.log(result.join('\n'));
}
chatLogger(['Chat Hello',
    'Chat darling',
    'Edit darling Darling',
    'Spam how are you',
    'Delete Darling',
    'end'
]);
chatLogger(['Chat John',
    'Spam Let\'s go to the zoo',
    'Edit zoo cinema',
    'Chat tonight',
    'Pin John',
    'end'
]);