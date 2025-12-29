//Given a sorted array of integers and an integer called target, find the element that equals to the target and return
// its index. Select the correct code that fills the ___ in the given code snippet.
function binarySearch(arr, target) {
  let left = 0;

  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);

    if (arr[mid] == target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(binarySearch(arr, target)); // Output: 2
