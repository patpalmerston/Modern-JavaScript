// maps are new Object structure. Maps hold key value pairs, and any value type can be used, object reference type or primitive can be used as a key or a value

// Maps
const map1 = new Map();

// Set Keys
const key1 = 'some string',
    key2 = {},
    key3 = function() {};

// set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count Values(key:value = pairs)
console.log(map1.size);

// ITERATING MAPS

// Loop using for...of to get keys and values
// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let key of map1.keys()) {
//     console.log(key);
// }

// Iterate value only
// for (let value of map1.values()) {
//     console.log(value);
// }

// Loop with forEach
// map1.forEach(function(value, key) {
//     console.log(`${key} = ${value}`);
// });

// Convert To Arrays
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Creat an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Creat an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
