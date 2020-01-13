let re;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = Global search

// console.log(re);
// console.log(re.source);

// functions that evaluate RegEx in JS ---------------------

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found returns -1
// const str = 'Pat Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'HI');
console.log(newStr);
