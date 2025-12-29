//13. Map & Filter
//Map and filter arr array methods for transforming and filtering arrays.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2); //[2, 4, 6, 8]
const evens = numbers.filter((n) => n % 2 === 0); //[2, 4]

console.log(numbers);
console.log(doubled);
console.log(evens);
