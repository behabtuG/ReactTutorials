//write a function in js that takes an array of numbers and returns the sum of all positive numbers in the array.

const SumOfPositiveNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(SumOfPositiveNumbers([1, 2, 3, 4, 5])); //15
console.log(SumOfPositiveNumbers([-1, -2, -3, -4, -5])); //0
