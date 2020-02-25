function comments(input) {
    let usersList = [];
    let articlesList = [];
    let output = {}

    for (let command of input) {
        if (command.substr(0, 4) === 'user') {
            let newUser = command.split(' ')[1];
            usersList.push(newUser);
        } else if (command.substr(0, 7) === 'article') {
            let newArticle = command.split(' ')[1];
            articlesList.push(newArticle);
        } else {
            let [userAndArticleName, commentTitleAndContent] = command.split(': ');
            let [userName, articleName] = userAndArticleName.split(' posts on ');
            let [commentTitle, commentContent] = commentTitleAndContent.split(', ');
            if (usersList.includes(userName) && articlesList.includes(articleName)) {
                if (!Object.keys(output).includes(articleName)) {
                    output[articleName] = [];
                }
                output[articleName].push([commentTitle, userName, commentContent])
            }
        }
    }
    output = Object.entries(output);
    output.sort((a, b) => b[1].length- a[1].length);
    output.forEach(element => {
        element[1].sort((a, b) => a[1].localeCompare(b[1]));
    });
    output.forEach(element => {
        console.log(`Comments on ${element[0]}`);
        element[1].forEach(element => {
            console.log(`--- From user ${element[1]}: ${element[0]} - ${element[2]}`);
        });
    });
}
comments(['user aUser123',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);