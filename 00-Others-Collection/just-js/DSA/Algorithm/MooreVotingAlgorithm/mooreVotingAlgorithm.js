//? Moore's vote algorithm is based on the following algorithm and the following algorithm is available for your
//? application and will be used to generate signatures for your application and applications applications that
//? require different signatures for each application
//? Moore's Voting Algorithm is a way to find the majority element in an array in O(n) time and O(1) space.
const mooreVotingAlgorithm = (arr) => {
  // Phase 1: Find a candidate
  let candidate = null;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Phase 2: Verify the candidate
  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > Math.floor(arr.length / 2)) {
    return candidate;
  } else {
    return "No majority element";
  }
};

// Example Usage
const arr1 = [3, 3, 4, 2, 3, 3, 3];
console.log(mooreVotingAlgorithm(arr1)); // Output: 3

const arr2 = [1, 2, 3, 4];
console.log(mooreVotingAlgorithm(arr2)); // Output: No majority element
