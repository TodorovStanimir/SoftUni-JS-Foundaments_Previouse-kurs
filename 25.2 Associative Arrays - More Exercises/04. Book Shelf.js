function bookShelf(inputInformation) {
    let shelfs = {};
    let books = {}

    for (let currentCommand of inputInformation) {
        if (currentCommand.includes('->')) {
            let [shelfId, shelfGenre] = currentCommand.split(' -> ');
            if (!Object.keys(shelfs).includes(shelfId)) {
                shelfs[shelfId] = shelfGenre;
            }
        } else {
            let [bookTitle, bookAuthorAndGenre] = currentCommand.split(': ');
            let [bookAuthor, bookGenre] = bookAuthorAndGenre.split(', ');
            if (Object.values(shelfs).includes(bookGenre)) {
                if (!Object.keys(books).includes(bookGenre)) {
                    books[bookGenre] = [];
                }
                books[bookGenre].push([bookTitle, bookAuthor]);
            }
        }
    }
    books = Object.entries(books);
    books.sort((a, b) => b[1].length - a[1].length);
    books.forEach(element => {
        element[1].sort((a, b) => a[0].localeCompare(b[0]));
    });

    books.forEach(element => {
        console.log(`${Object.keys(shelfs)[Object.values(shelfs).indexOf(element[0])]} ${element[0]}: ${element[1].length}`);
        element[1].forEach(element1 => {
            console.log(`--> ${element1[0]}: ${element1[1]}`);
        });
    });
}
bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance', 'Effect of the Void: Shay B, romance',
    'Name of Earth: Jo Bell, sci-fi',
    'Losing Dreams: Gail Starr, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);