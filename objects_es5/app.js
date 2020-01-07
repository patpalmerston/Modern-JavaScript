// Person Constructor

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };
}
// console.log('outside', this);
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
};

const pat = new Person('pat', 'palmerston', 'Sep 2 1980');

console.log(pat);
console.log(pat.calculateAge());
pat.getsMarried('fa');
console.log(pat.getFullName());
console.log(pat.hasOwnProperty('firstName'));
console.log(pat.hasOwnProperty('getFullName'));
