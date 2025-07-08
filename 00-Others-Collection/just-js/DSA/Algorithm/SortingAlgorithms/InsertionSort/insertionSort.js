// Javascript program for insertion sort

// Function to sort array using insertion sort
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

// A utility function to print array of size n

// Driver method
let arr = [12, 11, 13, 5, 6];

console.log(insertionSort(arr));
