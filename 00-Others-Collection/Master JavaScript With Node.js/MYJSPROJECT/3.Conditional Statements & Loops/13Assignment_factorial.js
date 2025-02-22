//? Write a program to calculate factorial of a given number.
/**
//? Define the number for which you want to calculate the factorial
const number = 5; // Change this to calculate factorial for a different number

// Initialize a variable to store the factorial
let factorial = 1;

// Iterate from 1 to the given number and multiply each number with the factorial
for (let i = 1; i <= number; i++) {
  factorial *= i;
}

// Print the factorial of the given number
console.log(`The factorial of ${number} is:`, factorial);
*/
const factorial = (n) => {
  // Base case: If n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: If n is greater than 1, calculate factorial recursively
  return n * factorial(n - 1);
};

const number = 5; // Change this to test with different numbers
const result = factorial(number);
console.log(`The factorial of ${number} is:`, result);
