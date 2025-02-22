/**
 * Write a JavaScript function to calculate average of 3 numbers. If any of the numbers is not passed then use
 *  default value as ‘1’.
 *
 */
function calculateAverage(num1 = 1, num2 = 1, num3 = 1) {
  // Calculate the sum of the numbers
  let sum = num1 + num2 + num3;
  // Calculate the average
  let average = sum / 3;
  return average;
}

// Example usage:
console.log(calculateAverage(3, 6, 9)); // Output: 6 (average of 3, 6, and 9)
console.log(calculateAverage(4, 8)); // Output: 4.3333... (average of 4, 8, and default 1)
console.log(calculateAverage(5)); // Output: 2.3333... (average of 5, default 1, and default 1)
console.log(calculateAverage()); // Output: 1 (average of default 1, default 1, and default 1)
