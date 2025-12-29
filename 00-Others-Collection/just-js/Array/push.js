//push()
//adds one or more elements to the end of an array and returns the new length of the array.
const numbers = [1, 2, 3]; //original array
numbers.push(4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(animals); // ['pigs', 'goats', 'sheep', 'cows']
console.log(count); // 4
animals.push("chickens", "cats", "dogs");
console.log(animals); // ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs']
//The push() method changes the length of the array.
const count2 = animals.push();
console.log(count2); // 7
console.log(animals); // ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs'] //no change
//If the push() method is used on a string, it will return an error.
//const count3 = "hello".push("world"); // TypeError: "hello".push is not a function
