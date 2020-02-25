let person = {};

Object.defineProperties(person, {
  name: {
    value: 'Ivan',
  },
  family: {
    value: 'Ivanov',
  }
});

let person1 = {
  name: 'Ivan',
  family: 'Ivanov'
}

console.log(person);        //  {}
console.log(person.name);   //  Ivan
console.log(person.family); //  Todorov
console.log(person1);       //  { name: 'Ivan', family: 'Todorov' }