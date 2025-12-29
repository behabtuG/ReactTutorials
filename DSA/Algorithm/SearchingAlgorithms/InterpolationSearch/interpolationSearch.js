const interpolationSearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === target) {
      return pos; // Target found, return index
    } else if (arr[pos] < target) {
      low = pos + 1; // Search right part
    } else {
      high = pos - 1; // Search left part
    }
  }
  return -1; // Target not found
};

const arr = [10, 20, 30, 40, 50];
console.log(interpolationSearch(arr, 30)); // Output: 2
