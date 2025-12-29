//every()
//tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((element) => element > 0);
console.log(allPositive); // true
