//reduce ()
//executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 10 //sum of all array values
