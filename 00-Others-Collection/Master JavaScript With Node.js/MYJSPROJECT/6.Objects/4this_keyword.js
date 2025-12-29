// Concept of 'this' keyword

let obj2 = {
  firstName: "Kidest",
  lastName: "Anteneh",
  age: 8,
  class: 1,
  details() {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old and is in ${this.class} grade`
    );
  },
};

obj3 = obj2;

obj2 = null;
console.log(obj3);
obj3.details();
