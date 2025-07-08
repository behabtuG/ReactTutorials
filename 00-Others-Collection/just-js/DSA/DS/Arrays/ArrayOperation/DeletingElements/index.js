//?1. Deletion at the Beginning of an Array
let arr = [1, 2, 3, 4];
arr.shift(); // Removes the first element (1)
console.log(arr); // Output: [ 2, 3, 4 ]

//?2. Deletion at the Given Index of an Array
let arr2 = [10, 20, 30, 40];
let index = 1; // Index of the element to remove
arr2.splice(index, 1); // Removes 1 element at index 1
console.log(arr2); // Output: [10, 30, 40]

//?3. Deletion at the End of an Array
let arr3 = [100, 200, 300, 400];
arr3.pop(); // Removes the last element (400)
console.log(arr3); // Output: [100, 200, 300]

let arr1 = [10, 20, 30, 40];
arr1.splice(2, 1); // Removes the element at index 2
console.log(arr1);
let arrs = [1, 2, 3];
arrs.splice(1, 1); // Removes the element at index 1
console.log(arrs); // Output: [1, 3]

let arr22 = [10, 20, 30, 40];
delete arr22[1]; // Removes the element at index 1
console.log(arr22); // Output: [10, <1 empty item>, 30, 40]
console.log(arr22.length); // Output: 4 (length remains unchanged)
