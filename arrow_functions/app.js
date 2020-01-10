// function declaration
// const sayHello = function() {
//     console.log('Hello');
// };

// arrow function
// const sayHello = () => {
//     console.log('Hello');
// };

// one line arrow function
// const sayHello = () => console.log('Hello');

//implicit return
// const sayHello = () => 'hello';

// same as the implicit
// const sayHello = function() {
//     return 'Hello';
// };

// Return an object-- treats the object as function body, so must wrap them in parentheses so we implicit return and expression with an object inside.
// const sayHello = () => ({
//     msg: 'Hello'
// });

// arrow, single param, implicit return
// const sayHello = name => `Hello ${name}`;

// more than one parenthasis
// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

// console.log(sayHello('brad', 'lumya'));

//-----Call Backs-----

const users = ['max', 'lap', 'fap', 'yap'];
// arrow, implicit return, one line
// const nameLengths = users.map(user => user.length);

// arrow
// const nameLengths = users.map(name => {
//     return name.length;
// });

// function declaration
// const nameLengths = users.map(function(user) {
//     return user.length;
// });

// console.log(nameLengths);
