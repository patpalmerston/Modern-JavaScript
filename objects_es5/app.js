// Person Constructor

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}
// console.log('outside', this);

const pat = new Person('pat', '9-02-80');

console.log(pat.calculateAge());
