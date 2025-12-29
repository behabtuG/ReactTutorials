//map ()
//create a new array with the results of calling a provided function on every element in the calling array.
const numbers = [1, 4, 9]; //original array
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots); // [1, 2, 3] //array of square roots

const numberss = [1, 2, 3];
const doubled = numberss.map((num) => num * 2);
console.log(doubled); // [2, 4, 6] //array of doubled values
