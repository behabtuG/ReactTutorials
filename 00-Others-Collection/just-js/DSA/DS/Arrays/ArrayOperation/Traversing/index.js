//?Definition: Visiting each element of an array in sequence.

//?Use Case: Used to print all elements, sum elements, or perform any operation that needs access to all elements.

//?Time Complexity: O(n), where n is the number of elements in the array.
const start = process.hrtime();
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Output: 10, 20, 30, 40
}
const memoryUsage = process.memoryUsage();
const end = process.hrtime(start);

console.log(`Execution Time: ${end[0]}s ${end[1] / 1000000}ms`);
console.log(`Memory Usage: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
