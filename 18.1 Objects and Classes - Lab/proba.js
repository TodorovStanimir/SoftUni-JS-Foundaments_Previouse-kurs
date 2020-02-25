function proba(name) {

    class Person {
        constructor(firstname, secondname, age, grade) {
            this.firstname = firstname;
            this.secondname = secondname;
            this.age = age;
            this.grade = grade;
        }
        sayHello(person) {
            console.log(`Hello, ${person.firstname} ${person.secondname}! My name is ${this.firstname} ${this.secondname}.`);
        }

    }

    let person1 = new Person('Stamat', 'Petrov', 50, 6);
    let person2 = new Person('Ivan', 'Ivanov', 15, 3);


    person2.sayHello(person1);


    // sayGoodbye: function () {
    //     console.log(`Goodbye ${person.firstname} ${person.secondname}!!!`)
    // }

    // console.log(personJson);

}
proba('eee')