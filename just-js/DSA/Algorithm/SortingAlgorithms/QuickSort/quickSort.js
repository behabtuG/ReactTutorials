const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
};

// Example usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arrayToSort)); // Output: [3, 9, 10, 27, 38, 43, 82]
