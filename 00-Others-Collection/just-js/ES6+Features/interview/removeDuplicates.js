//?write a function in Js that removes duplicate from an array.

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(removeDuplicates(numbers)); //[ 1, 2, 3, 4, 5 ]
