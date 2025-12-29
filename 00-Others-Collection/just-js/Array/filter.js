//filter()
//creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5, 6]; //original array
const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4, 6] //array of even numbers
