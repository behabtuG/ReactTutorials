//?kadane algorithm for maximum subarray sum calculation for a given array
//?Given an array of integers (both positive and negative), find the contiguous
//? subarray with the maximum sum.
//?Example: For the array [-2,1,-3,4,-1,2,1,-5,4], the maximum subarray is [4,-1,2,1] with sum 6.
const kadaneAlgorithm = (arr) => {
  if (arr.length === 0) return 0; // Handle empty array case

  let maxSoFar = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Decide whether to add the current element to the subarray or start a new subarray
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    // Update the maximum sum found so far
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
};

// Example Usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadaneAlgorithm(arr)); // Output: 6 (Subarray: [4, -1, 2, 1])
