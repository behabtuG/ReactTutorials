//?for of loops
//?you can use the 'for of ' loop to iterate over any iterable object, like arrays, strings, sets, etc.

const fullName = "Behabtu Getnet";
const ids = [1, 2, 3, 4, 5];
for (const iterator of fullName) {
  console.log(iterator);
}
//output -->  B e h a b t u  G e t n e t

for (const iterator of ids) {
  console.log(iterator);
}
//oupput --> 1 2 3 4 5
