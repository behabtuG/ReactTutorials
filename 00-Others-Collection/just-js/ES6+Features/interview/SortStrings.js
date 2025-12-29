//? Write a fuction in JS that takes an array of strings as input and returns a new array with the strings
//?  sorted in alphabetical order

const SortStrings = (arr) => {
  return arr.sort();
};

const strings = ["kiwi", "banana", "orange", "apple", "grape"];
console.log(SortStrings(strings)); //[ 'apple', 'banana', 'grape', 'kiwi', 'orange' ]
