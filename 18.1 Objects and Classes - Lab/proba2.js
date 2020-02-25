function cat(input) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        };
    }

    for (let i = 0; i < input.length; i++) {
        let currentCat = input[i].split(' ');
        let name, age;
        [name, age] = [currentCat[0], currentCat[1]];
        cats.push(new Cat(name, age));
    }
    cats.forEach(cat => cat.speak());
}
cat(['Mellow 2', 'Tom 5'])