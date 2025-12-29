//write a function in JS that finds the second highest number in array of numbers.

const findSecondHighest = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
};

const numbers = [10, 5, 20, 15, 8];
console.log(findSecondHighest(numbers)); //15
