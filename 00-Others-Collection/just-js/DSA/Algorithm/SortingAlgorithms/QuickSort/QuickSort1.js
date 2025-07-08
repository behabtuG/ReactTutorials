const quickSort = (arr) => {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (arr.length <= 1) return arr;

  // Choose the pivot (using the last element here)
  const pivot = arr[arr.length - 1];
  // Partition the array into two subarrays
  const left = []; // Elements smaller than the pivot
  const right = []; // Elements greater than or equal to the pivot

  for (let i = 0; i < arr.length - 1; i++) {
    // Exclude the pivot
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right subarrays, then combine
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// Example usage
const arr = [8, 2, 5, 1, 9, 3, 7, 4];
console.log("Original Array:", arr);
console.log("Sorted Array:", quickSort(arr));

/*Given Array: [8, 2, 5, 1, 9, 3, 7, 4]

    First Partition:
        Pivot = 4
        Left = [2, 1, 3] (elements < 4)
        Right = [8, 5, 9, 7] (elements >= 4)

    Recursively Sort Left:
        Subarray [2, 1, 3]:
            Pivot = 3
            Left = [2, 1] (elements < 3)
            Right = [] (no elements >= 3)
            Continue sorting [2, 1]:
                Pivot = 1
                Left = []
                Right = [2]
                Result: [1, 2]
            Result: [1, 2, 3]

    Recursively Sort Right:
        Subarray [8, 5, 9, 7]:
            Pivot = 7
            Left = [5]
            Right = [8, 9]
            Sort [8, 9]:
                Pivot = 9
                Left = [8]
                Right = []
                Result: [8, 9]
            Result: [5, 7, 8, 9]
            
    Combine Results:
        Left = [1, 2, 3]
        Pivot = 4
        Right = [5, 7, 8, 9]
        Final Result: [1, 2, 3, 4, 5, 7, 8, 9]
       */
