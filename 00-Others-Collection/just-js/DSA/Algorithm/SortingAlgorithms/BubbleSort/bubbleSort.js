const bubbleSort = (arr, comparator) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if (arr[j] > arr[j + 1]) {
      //*Swap elements to arrange in ascending order
      //   if (arr[j] < arr[j + 1]) {  // Swap elements to arrange in descending order
      //!or by using comparator
      if (comparator(arr[j], arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // Return the sorted array in ascending order
};

// let arrAscendingORDescending = [7, 2, 8, 1, 3, 4, 5, 6];
// console.log(bubbleSort(arrAscendingORDescending)); //!Output: [8, 7, 6, 5, 4, 3, 2, 1]
// console.log(solveIt(arrAscendingORDescending)); //! Output: [1, 2, 3, 4,  5, 6, 7, 8 ]

// Comparator for ascending order
const ascendingComparator = (a, b) => a > b;
// Comparator for descending order
const descendingComparator = (a, b) => a < b;

let arr = [7, 2, 8, 1, 3, 4, 5, 6];
console.log(bubbleSort([...arr], ascendingComparator)); //? Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(bubbleSort([...arr], descendingComparator)); //? Output: [8, 7, 6, 5, 4, 3, 2, 1]
