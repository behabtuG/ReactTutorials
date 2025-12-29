//10. This Keyword
//this ferfers to the context in which a function is called.
const person = {
  name: "Kidest",
  sayName() {
    console.log(this.name);
  },
};

person.sayName(); //Kidest
