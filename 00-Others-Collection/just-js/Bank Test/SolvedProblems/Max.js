//?Pseudocode  to find the maximum value in a list
function findMax(numbers) {
  // Initialize the maximum value to the first element in the list
  let max = numbers[0];

  // Iterate through each number in the list starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    // If the current number is greater than the current max value
    if (numbers[i] > max) {
      // Update the max value to the current number
      max = numbers[i];
    }
  }

  // Return the maximum value found
  return max;
}

// Example usage:
numbers = [3, 5, 7, 2, 8];
maxValue = findMax(numbers);
console.log("The maximum value is:", maxValue);
