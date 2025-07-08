const jumpSearch = (arr, target) => {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1; // Target not found
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i; // Target found, return index
    }
  }

  return -1; // Target not found
};

const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(jumpSearch(arr, 7)); // Output: 3
