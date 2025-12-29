//sort()
//sorts the elements of an array in place and returns the sorted array.
//The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const numbers = [4, 2, 3, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4]

const fruits = ["banana", "apple", "cherry", "orange", "grape"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry", "grape", "orange"]

// Sorting numbers in ascending order
const numArray = [40, 10, 5, 100, 200];
numArray.sort((a, b) => a - b);
console.log(numArray); // [1, 5, 40, 200]

// Sorting numbers without a compare function (incorrect way)
const num1Array = [40, 10, 5, 100, 200];
num1Array.sort();
console.log(num1Array); // [10, 100, 200, 40, 5] (incorrect order)
