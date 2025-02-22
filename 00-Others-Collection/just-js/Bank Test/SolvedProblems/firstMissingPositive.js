function firstMissingPositive(nums) {
  const set = new Set();
  let smallest = 1; // Start with the smallest positive number

  // Add all numbers to the set
  for (const num of nums) {
    if (num > 0) {
      set.add(num);
    }
  }

  // Find the first missing positive number
  while (set.has(smallest)) {
    smallest++;
  }

  return smallest; // Return the first missing positive
}

// Example Usage
const nums = [3, 4, -1, 1];
console.log("First missing positive:", firstMissingPositive(nums)); // Output: 2
