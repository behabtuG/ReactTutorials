/*const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
console.log(newArray);

const oldObject = {
  name: "Max",
};
const newObject = {
  ...oldObject,
  age: 28,
};
console.log(newObject);
//newObject would then be
{
 name: 'Max',
 age: 28
 }
 */

// Array Literal
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newNumbers);

// Function Calls
const sum = (x, y, z) => x + y + z;
const numberss = [1, 2, 3];
console.log(sum(...numberss)); // 6

// Object Literal (starting from ES2018)
const person = { name: "John", age: 30 };
const newPerson = { ...person, country: "USA" };
console.log(newPerson);
// newPerson: { name: 'John', age: 30, country: 'USA' }

// Function Parameters
const sumx = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(sumx(1, 2, 3)); // 6
console.log(sumx(1, 2, 3, 4, 5)); // 15
