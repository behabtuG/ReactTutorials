/*
Many array methods in JavaScript accept callback functions as arguments.
forEach: Executes a provided function once for each array element.
map: Creates a new array with the results of calling a provided function on every element in the array.
*/

let arr = [1, 2, 6, 10, 14, 20, 24, 33, 60, 99];

arr.forEach((num) => console.log(num));

let newArr = arr.map((num) => num * 2);
console.log(newArr);
