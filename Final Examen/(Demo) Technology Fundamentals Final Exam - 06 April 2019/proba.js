const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);
const objectS=Object.getOwnPropertyDescriptor(object1,a);

console.log(a);
console.log(objectS);


