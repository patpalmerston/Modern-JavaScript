//Sets - Store unique values of any type (unique can never be duplicated) No duplicates in a set

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// // Get count
// console.log(set1.size);

// // Check for values
// console.log(set1.has(100)); // boolean of true or false
// console.log(set1.has(50 + 50)); // true equal 100
// console.log(set1.has({ name: 'John' })); // False because this is reference value stored in the heap. Not a primitive value stored in the stack
// console.log({ name: 'John' } === { name: 'John' }); // False because it is pointing to a reference in memory, not a primitive value
// console.log('john' === 'john'); // True because a string is a primitive value not a reference value

// // Delete from set
// set1.delete(100);
// console.log(set1);

// Iterating through SETS

// // For..of  --- you can loop through '.values', '.keys', '.entries'
// for (let item of set1) {
//     console.log(item);
// }

// // ForEach loop
// set1.forEach(value => {
//     console.log(value);
// });

// Convert SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
