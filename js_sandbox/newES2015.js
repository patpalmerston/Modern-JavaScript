// Iterator Example
function nameIterator(names) {
    let nextIndex = 0;

    // return object that has a next function
    return {
        // next function returns based on a conditional. If nextIndex is less than names.length, then return object that has whole value of whatever that names index is so we need to iterate it by one. Also the object needs to include a done value of false, otherwise if it is done iterating we hit true.
        next: function() {
            return nextIndex < names.length
                ? { value: names[nextIndex++], done: false }
                : { done: true };
        }
    };
}

// create an array of names
const namesArr = ['jack', 'jill', 'john'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value); //jack
console.log(names.next().value); //jill
console.log(names.next().value); //john
console.log(names.next()); // done: true
