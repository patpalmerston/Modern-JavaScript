// Iterator Example
// function nameIterator(names) {
//     let nextIndex = 0;

//     // return object that has a next function
//     return {
//         // next function returns based on a conditional. If nextIndex is less than names.length, then return object that has whole value of whatever that names index is so we need to iterate it by one. Also the object needs to include a done value of false, otherwise if it is done iterating we hit true.
//         next: function() {
//             return nextIndex < names.length
//                 ? { value: names[nextIndex++], done: false }
//                 : { done: true };
//         }
//     };
// }

// // create an array of names
// const namesArr = ['jack', 'jill', 'john'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value); //jack
// console.log(names.next().value); //jill
// console.log(names.next().value); //john
// console.log(names.next()); // done: true

// Generator Example
// generators are functions that can return or yield multiple values
// the '*' tells JS this is a generator not just a function
// function* sayNames() {
//     yield 'jack';
//     yield 'jill';
//     yield 'john';
// }
// // assign variable
// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
// function* createIds() {
//     let index = 0;

//     // while true we want to yield the index value iterated by one
//     while (true) {
//         yield index++;
//     }
// }

// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// a generator could continual create ids

// Create a symbol - no two symbols can be the same
// const sym1 = Symbol(); // is a primitive value not a new constructor
// const sym2 = Symbol('sym2'); // add a value to symbol

// console.log(Symbol('3e') === Symbol('3e')); // is false because no two symbols can be the same
// console.log(typeof sym2);

// Unique Object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in loop (the symbols dont show up)
for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

// symbols are ignored in JSON.stringify
console.log(JSON.stringify({ key: 'prop' })); // logged as a sting
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); // logged as a sting
