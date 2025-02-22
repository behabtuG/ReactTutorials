//*Recursive Approach
const ternarySearch = (arr, low, high, target) => {
  if (low > high) return -1; // Target not found

  let mid1 = low + Math.floor((high - low) / 3);
  let mid2 = high - Math.floor((high - low) / 3);

  if (arr[mid1] === target) return mid1; // Target found at mid1
  if (arr[mid2] === target) return mid2; // Target found at mid2

  if (target < arr[mid1]) {
    return ternarySearch(arr, low, mid1 - 1, target); // Search in left part
  } else if (target > arr[mid2]) {
    return ternarySearch(arr, mid2 + 1, high, target); // Search in right part
  } else {
    return ternarySearch(arr, mid1 + 1, mid2 - 1, target); // Search in middle part
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
console.log(ternarySearch(arr, 0, arr.length - 1, target)); // Output: 4

//*Iterative Approach
const ternarySearchIterative = (arr1, target1) => {
  let low1 = 0;
  let high1 = arr.length - 1;

  while (low1 <= high1) {
    let mid1 = low1 + Math.floor((high1 - low1) / 3);
    let mid2 = high1 - Math.floor((high1 - low1) / 3);

    if (arr1[mid1] === target1) return mid1; // Target found at mid1
    if (arr1[mid2] === target1) return mid2; // Target found at mid2

    if (target1 < arr1[mid1]) {
      high1 = mid1 - 1; // Search in left part
    } else if (target1 > arr1[mid2]) {
      low1 = mid2 + 1; // Search in right part
    } else {
      low1 = mid1 + 1; // Search in middle part
      high1 = mid2 - 1;
    }
  }

  return -1; // Target not found
};

const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target1 = 70;
console.log(ternarySearchIterative(arr1, target1)); // Output: 6
