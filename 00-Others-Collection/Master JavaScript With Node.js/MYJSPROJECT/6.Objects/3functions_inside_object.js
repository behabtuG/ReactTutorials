// Creating Functions inside Object

let obj2 = {
  firstName: "Kidest",
  lastName: "Anteneh",
  age: 8,
  class: 1,
  displayDetails: function details() {
    console.log(
      `${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old and is in ${obj2.class} grade`
    );
  },
  details2() {
    console.log(
      `${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old and is in ${obj2.class} grade`
    );
  },
};

obj2.displayDetails();
obj2.details2();
