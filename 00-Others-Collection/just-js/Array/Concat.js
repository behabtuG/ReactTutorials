//concat() // Returns a new array that includes elements from the original array and additional elements.
const numbers = [1, 2, 3];
const moreNumbers = [4, 5];
const allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers); //[1, 2, 3, 4, 5]
// Original arrays remain unchanged
console.log(numbers); //[1, 2, 3]
console.log(moreNumbers); //[4, 5]
