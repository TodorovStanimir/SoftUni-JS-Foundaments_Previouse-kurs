function bookShelf(inputInformation) {
    let shelfs = new Map();

    for (let currentCommand of inputInformation) {
        if (currentCommand.includes('->')) {
            let [shelfId, shelfGenre] = currentCommand.split(' -> ');
            let notConsistShelfId = true;
            Array.from(shelfs.keys()).forEach(element => {
                if (element.split(' ')[0] === shelfId) {
                    notConsistShelfId = false;
                }
            });
            if (notConsistShelfId) {
                shelfs.set(`${shelfId} ${shelfGenre}`, []);
            }
        } else {
            let [bookTitle, bookAuthorAndGenre] = currentCommand.split(': ');
            let [bookAuthor, bookGenre] = bookAuthorAndGenre.split(', ');
            Array.from(shelfs.keys()).forEach(element => {
                if (element.split(' ')[1] === bookGenre) {
                    let books = shelfs.get(element);
                    books.push([bookTitle, bookAuthor]);
                    shelfs.set(element,books);
                }
            });
        }
    }
    shelfs = Array.from(shelfs.entries());
    shelfs.sort((a, b) => b[1].length - a[1].length);
    shelfs.forEach(element => {
        element[1].sort((a, b) => a[0].localeCompare(b[0]));
    });

    shelfs.forEach(element => {
        console.log(`${element[0]}: ${element[1].length}`);
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