const binarySearch = (arr, target, low = 0, high = arr.length - 1) => {
  if (low > high) {
    return -1; // Base case: target not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Base case: target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1); // Recursive case: search left half
  } else {
    return binarySearch(arr, target, mid + 1, high); // Recursive case: search right half
  }
};

const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7)); // Output: 3 (index of 7)
