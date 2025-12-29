//2.Destructuring assignment for objects and arrays
//Destructure objects and arrays to access specific properties or elements in a cleaner way.
const user = { name: "John", age: 30, city: "New York" };
const { name, age, city } = user; //Easier to access the properties
console.log(name); // John
console.log(age); // 30
console.log(city); // New York
console.log(name, age, city); //John 30 New York

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; //Easier to access the elements
