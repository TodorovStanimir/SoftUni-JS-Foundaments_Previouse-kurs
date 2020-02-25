function test() {

    let person = {
        name: "Peter"
    }

    let obj = person;
    console.log(person.name);
    changeName('Ivan', obj);
    console.log(person.name);

    function changeName(name, obj) {
        obj.name = name;
    }
}
test()