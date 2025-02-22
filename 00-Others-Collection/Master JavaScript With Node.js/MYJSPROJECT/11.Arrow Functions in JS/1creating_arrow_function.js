/*
How to convert normal functions into arrow functions
*/

let multiply = function (num1, num2) {
  return num1 * num2;
};

let multiply1 = (num1, num2) => num1 * num2;

console.log(multiply(25, 30));
console.log(multiply1(25, 30));
