const exponentialSearch = (arr, target) => {
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }

  return binarySearch(
    arr,
    target,
    Math.floor(i / 2),
    Math.min(i, arr.length - 1)
  );
};

const binarySearch = (arr, target, low, high) => {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(exponentialSearch(arr, 6)); // Output: 5
