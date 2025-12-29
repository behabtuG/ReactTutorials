const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found, return index
    }
  }
  return -1; // Target not found
};

const arr = [4, 2, 9, 7, 5];
console.log(linearSearch(arr, 7)); // Output: 3
