const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

const numbers = [10, 20, 30, 40, 50];
// Find the index of the first element greater than 25
const foundIndex = numbers.findIndex((element) => element > 25);
console.log(foundIndex); // Output: 2 (index of 30)
