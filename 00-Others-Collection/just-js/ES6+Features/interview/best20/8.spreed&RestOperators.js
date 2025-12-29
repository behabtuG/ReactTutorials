//8.Spread & Rest Operators
//spread ... expands elements, and Rest collects them in to an array.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; //spread
console.log(arr2);
function sum(...nums /**Rest*/) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // 10
