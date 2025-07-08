/*
Many array methods in JavaScript accept callback functions as arguments.
filter: Creates a new array with all the elements that pass the test implemented by the provided function.
find: Returns the first element in the array that satisfies the provided testing function. 
      If no element satisfies the testing function, it returns undefined.
some: Tests whether at least one element in the array passes the test implemented by the provided function.
*/

let arr = [1, 2, 6, 10, 14, 20, 24, 33, 60, 99];

let arr1 = arr.filter((num) => num % 3 === 0);

let findOutput = arr.find((num) => num % 3 === 0);

let someOutput = arr.some((num) => num % 17 === 0);

console.log(arr1);
console.log(findOutput);
console.log(someOutput);
