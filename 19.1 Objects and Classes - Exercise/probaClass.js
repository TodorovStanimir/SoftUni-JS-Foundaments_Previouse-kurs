function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`My name is ${this.name}`);
            console.log((`I am ${this.age} years old`));
            console.log(`I like to say my name and my ages!`)
        }
    }
    let cats = [];
    for (let line of input) {
        let [name, age] = line.split(' ')
        cats.push(new Cat(name, age));
    }
    for (let cat of cats) {
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5']);