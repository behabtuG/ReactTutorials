const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, mid));
  const rightHalf = mergeSort(arr.slice(mid));
  return merge(leftHalf, rightHalf);
};

const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < left.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
};

// Example usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arrayToSort)); // Output: [3, 9, 10, 27, 38, 43, 82]
