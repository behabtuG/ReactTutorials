//?1. Insertion at the Beginning of an Array
let arrs = [10, 20, 30, 40];
arrs.unshift(5); // Insert 5 at the beginning
console.log(arrs); // Output: [5, 10, 20, 30, 40]

//?2. Insertion at the Given Index of an Array
let arr1 = [10, 20, 30, 40];
let index = 2; // Position to insert
arr1.splice(index, 0, 25); // Insert 25 at index 2
console.log(arr1); // Output: [10, 20, 25, 30, 40]
const arr = [10, 20, 30];
console.log("--orginal array--", arr); //? Output: [10, 20, 30]
arr.push(40); // Add an element
console.log("--adding with push--", arr); //? Output: [10, 20, 30, 40]
arr.splice(1, 0, 15); // add element at index 1
console.log("--adding element--", arr); //?Output: [10, 15, 20, 30, 40]
arr.splice(1, 1, 25); // replace element at index 1
console.log("--replace element--", arr); //?output: [10, 25, 20, 30, 40];
arr.splice(1, 1); // Remove 1 element at index 1
console.log("--after removing--", arr); //? Output: [10, 20, 30, 40]
arr.splice(1, 2); // Remove 2 element at index 1
console.log(arr); //? Output: [10, 40]
const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");
console.log(myFish);
console.log(removed); //? Output: [10,
//? myFish is ["angel", "clown", "mandarin", "sturgeon"]
//? no items removed
const myFishs = ["clown", "mandarin", "sturgeon"];
const removedd = myFish.splice(0, 0, "angel");
console.log(removedd);
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
const myFishss = ["angel", "clown", "drum", "mandarin", "sturgeon"];
console.log(myFishss);
const removeddd = myFish.splice(3, 1);
console.log(removeddd);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2); //start removing elements from index 2.
console.log(days); // ["Monday", "Tuesday"]
console.log(months); // ["January", "February"]

//?3. Insertion at the End of an Array
let arrend = [10, 20, 30, 40];
arrend.push(50); // Insert 50 at the end
console.log(arrend); // Output: [10, 20, 30, 40, 50]

//? using spread operator
let arra = [10, 20, 30];
let newArr = [...arra, 40]; // Insert 40 at the end
console.log(newArr); // Output: [10, 20, 30, 40]
console.table(newArr); // Output: [10, 20, 30,
