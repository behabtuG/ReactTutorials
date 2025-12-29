/*
Class is introduced in JS in ECMAScript 6 (ES6) release
*/

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

let a = new Employee("Behabtu", 12563, "behabtu@dezlearn.com");
let b = new User("Kidest", 5889);

console.log(a);
console.log(b);
