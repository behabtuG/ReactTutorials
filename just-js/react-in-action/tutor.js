/*class Person {
  name = "Max";
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName;
*/
var person = {
  name: "Jason",
  shout() {
    console.log("Hi, my name is", this.name);
  },
};

var persons = {
  name: "Jason",
  shout: () => console.log("Hi, my name is", this.name),
};

persons.shout(); // Should print out "Hi, my name is Jason"

var person = {
  name: "Jason",
  shout() {
    console.log("Hi, my name is", this.name);
  },
};

person.shout(); // Now correctly prints "Hi, my name is Jason"
