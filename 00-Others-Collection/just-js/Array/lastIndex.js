//lastIndexof ()
//returns the last index at which a given element can be found in the array, or -1 if it is not present.
// The array is searched backwards, starting at fromIndex.
const fruits = ["apple", "banana", "cherry", "banana"]; //original array
console.log(fruits.lastIndexOf("banana")); // 3 //last index of 'banana'
console.log(fruits.lastIndexOf("grape")); // -1 //'grape' not found
