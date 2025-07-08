const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
