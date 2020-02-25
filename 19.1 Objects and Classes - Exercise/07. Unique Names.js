function uniqueNames(input) {

    input.sort(sortNames);

    function sortNames(a, b) {
        if (a.length < b.length || a.length > b.length) {
            return a.length - b.length;
        } else if (a.length === b.length && a !== b) {
            return a.localeCompare(b);
        }
    }
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            output.push(input[i]);
        }
    }
    console.log(output.join('\n'));
}
uniqueNames(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
]);
// uniqueNames(["Denise",
//     "Ignatius",
//     "Iris",
//     "Isacc",
//     "Indie",
//     "Dean",
//     "Donatello",
//     "Enfuego",
//     "Benjamin",
//     "Biser",
//     "Bounty",
//     "Renard",
//     "Rot"
// ])