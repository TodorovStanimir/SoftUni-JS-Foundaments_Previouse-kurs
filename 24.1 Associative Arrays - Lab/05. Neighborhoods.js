function neighborhoods(input) {
    let neighborhoods = new Map();
    let streets = input.shift().split(', ');

    for (let street of streets) {
        neighborhoods.set(street, []);
    }

    for (let item of input) {
        let [street, name] = item.split(' - ');
        if (neighborhoods.has(street)) {
            neighborhoods.get(street).push(name);
        }
    }
    let sorted = Array.from(neighborhoods.entries()).sort((a, b) => b[1].length - a[1].length);
    for (let key of sorted) {
        console.log(`${key[0]}: ${key[1].length}`);
        for (let name of key[1]) {
            console.log(`--${name}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);