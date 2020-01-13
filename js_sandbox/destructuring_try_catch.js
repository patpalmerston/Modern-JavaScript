// Destructuring Assignment

let a, b;

// [a, b] = [100, 200]

// Rest Pattern (...) + 'whatever' = '...whatever'( the name is a banana name, the spread '...' matters)
// this is way to declare specific variable to a value and then give the rest to a different variable
[a, b, ...banana] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function() {
        console.log('Hello');
    }
};

// Old ES5 to assign variable to object values
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender,
//     sayHello = person.sayHello;
// console.log(name, age, city, gender);
// person.sayHello();

// New ES6 Destructuring
// const { name, age, city, sayHello } = person;
// console.log(name, age, city);
// sayHello();
