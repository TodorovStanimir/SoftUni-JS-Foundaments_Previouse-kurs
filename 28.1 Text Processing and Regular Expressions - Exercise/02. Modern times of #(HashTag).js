modernTimesOfHashTag = (input) => {
input.match(/\B#[A-Za-z]+\b/g).map(el => el.slice(1)).forEach(el=> console.log(el));
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');

// function modernTimesOfHashTag(input) {
//     let pattern = /\B#[A-Za-z]+\b/g;
//     let output = []
//     while ((validWord = pattern.exec(input)) !== null) {
//         let word = String(validWord[0]).substr(1);
//         output.push(word);
//     }
//     output.forEach(element => {
//         console.log(element);
//     });
// }
// modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');