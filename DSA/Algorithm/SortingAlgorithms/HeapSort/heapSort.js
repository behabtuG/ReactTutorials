const heapSort = (arr) => {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root and last element
    heapify(arr, i, 0); // Heapify the root
  }

  return arr;
};

const heapify = (arr, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest);
  }
};

// Driver's code
let arr = [9, 4, 3, 8, 10, 2, 5];
console.log(heapSort(arr)); //? [2, 3, 4, 5, 8, 9, 10]
