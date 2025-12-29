//Includes ()
//determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array1 = [1, 2, 3, 4, 5]; //original array
console.log(array1.includes(2)); // true
console.log(array1.includes(6)); // false
console.log(array1.includes(2, 2)); // false
console.log(array1.includes(3, 2)); // true
