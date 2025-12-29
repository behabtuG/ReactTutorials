const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid; // Target found
    }
  }
  return -1; // Target not found
};

// Example usage
const sortedArray = [3, 9, 10, 27, 38, 43, 82];
const target = 10;
console.log(binarySearch(sortedArray, 10)); // Output: 2 (index of target)
