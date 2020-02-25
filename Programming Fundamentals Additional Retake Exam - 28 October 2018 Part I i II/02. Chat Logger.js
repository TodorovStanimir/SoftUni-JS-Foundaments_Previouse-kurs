    function chatLogger(input) {
        let currentCommand = input.shift();
        let chat = [];

        while (currentCommand !== 'end') {
            let currentChat = currentCommand.split(' ');
            switch (currentChat[0]) {
                case ('Chat'):
                    chat.push(currentChat[1]);
                    break;
                case ('Delete'):
                    if (chat.includes(currentChat[1])) {
                        chat.splice(chat.indexOf(currentChat[1]), 1);
                    }
                    break;
                case ('Edit'):
                    if (chat.includes(currentChat[1])) {
                        chat.splice(chat.indexOf(currentChat[1]), 1, currentChat[2]);
                    }
                    break;
                case ('Pin'):
                    if (chat.includes(currentChat[1])) {
                        chat.splice(chat.indexOf(currentChat[1]), 1);
                        chat.push(currentChat[1]);
                    }
                    break;
                case ('Spam'):
                    currentChat.shift();
                    chat = chat.concat(currentChat);
                    break;
            }
            currentCommand = input.shift();
        }

        chat.forEach(row => {
            console.log(row)
        });
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