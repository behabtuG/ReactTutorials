//Add, Update and Delete Object Properties

let obj2 = {
  firstName: "Kidest",
  lastName: "Anteneh",
  age: 8,
  class: 1,
};

obj2.middleName = "Anagaw";
obj2["height"] = 3.4;
obj2.firstName = "Behabtu";
//obj2.class = null;
delete obj2.class;
console.log(obj2);
