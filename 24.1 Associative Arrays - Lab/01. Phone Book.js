function phoneBook(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let [name, phone] = input[i].split(' ');
        result.set(name, phone);
    }
    for (let key of result) {
        console.log(`${key[0]} -> ${key[1]}`);
    } 
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);