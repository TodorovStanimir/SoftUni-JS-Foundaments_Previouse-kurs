class Person {
    constructor(name, givenName) {
        this.name = name,
        this.givenName = givenName
        function sayName () {
            console.log(this.name);
        }
    }
    // sayName(name) {
    //     console.log(this.name);
    // }
}
let a = new Person('Stanimir', 'Todorov')
for (let key in a) {
    console.log(`${key}: ${a[key]}`);
}
console.log(a.sayName());

// console.log(a);
