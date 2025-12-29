//? Write a program to find sum of first 10 odd numbers.

// Initialize a variable to store the sum
let sum = 0;

// Initialize a variable to count the number of odd numbers found
let count = 0;

// Iterate through numbers starting from 1 until we find 10 odd numbers
for (let i = 1; count < 10; i++) {
  // Check if the number is odd
  if (i % 2 !== 0) {
    sum += i; // Add the odd number to the sum
    count++; // Increment the count of odd numbers found
  }
}

// Print the sum of the first 10 odd numbers
console.log("Sum of the first 10 odd numbers:", sum);
