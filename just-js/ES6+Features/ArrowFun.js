class Person {
  constructor(name) {
    this.name = name;
  }

  // Regular function method
  sayHelloRegular() {
    console.log("Hello, my name is " + this.name);
  }

  // Arrow function method
  sayHelloArrow = () => {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Alice");

// Call regular function method
person1.sayHelloRegular(); // Output: Hello, my name is Alice

// Call arrow function method
person1.sayHelloArrow(); // Output: Hello, my name is Alice

// Extracting the arrow function and using it elsewhere
const arrowFunction = person1.sayHelloArrow;
arrowFunction(); // Output: Hello, my name is Alice
