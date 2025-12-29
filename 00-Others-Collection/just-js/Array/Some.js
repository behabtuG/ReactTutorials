//some()
//tests whether at least one element in the array passes the test implemented by the provided function.
//It returns a Boolean value.
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // true
