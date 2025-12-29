/*const array1 = [1, 4, 9, 16];
//Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
*/
let x = ["1", "2", "3"].map(parseInt);
console.log(x);
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN

let y = ["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
console.log(y);

const words = ["apple", "banana", "cherry"];

// Add index to each word in the array
const indexedWords = words.map((word, index) => `${index + 1}: ${word}`);
console.log(indexedWords); // Output: ['1: apple', '2: banana', '3: cherry']

const numbers = [1, 2, 3];

const double = function (value) {
  return value * this.multiplier;
};

const result = numbers.map(double, { multiplier: 2 });
console.log(result); // Output: [2, 4, 6]
