//find()
//returns the value of the first element in the array that satisfies the provided testing function.
//Otherwise undefined is returned.
const numbers = [5, 12, 8, 130, 44]; //original array
const found = numbers.find((element) => element > 10);
console.log(found); // 12
