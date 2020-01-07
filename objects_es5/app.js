// Person Constructor

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function() {
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // };
// }
// // console.log('outside', this);
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// // Gets Married
// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// };

// const pat = new Person('pat', 'palmerston', 'Sep 2 1980');

// console.log(pat);
// console.log(pat.calculateAge());
// pat.getsMarried('fa');
// console.log(pat.getFullName());
// console.log(pat.hasOwnProperty('firstName'));
// console.log(pat.hasOwnProperty('getFullName'));

// Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Tom', 'Smith', '444-444-4444', 'Standard');
const customer2 = new Customer('Tomm', 'Smitmh', '444-444-1111', 'Stan');
console.log(person1.greeting());

// customer greeting
Customer.prototype.greeting = function() {
    return `Hello hello`;
};

console.log(customer2.greeting());
