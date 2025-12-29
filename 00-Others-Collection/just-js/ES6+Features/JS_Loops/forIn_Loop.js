//?2. for in loop
//?the 'for in ' loop is used to iterate over the properties of an object.

const person = {
  firstName: "Behabtu",
  lastName: "Getnet",
  handle: "@behabtugetnet",
  field: "SOftware Engineer",
};

//? iterate over an object

for (const key in person) {
  console.log(key); //firstName, lastName, handle, field
  console.log(person[key]); //Behabtu, Getnet, @behabtugetnet, SOftware Engineer
}
