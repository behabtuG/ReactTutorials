/*function compareVarAndLet() {
  for (var i = 0; i < 3; i++) {
    //Some code
  }
  console.log(i); //? output: 3 because 'var' is function-scoped, not block-scoped
}

compareVarAndLet();
console.log(typeof null);
let result = 1 + "10" - 1;
console.log(1 + "1" - 1);
console.log(typeof result);
const a = 1 + "Behabtu";
console.log(1 + "behabtu");
console.log(typeof a);
*/
(function () {
  var a = (b = 5);
})();

console.log(b);
console.log([] + []);
console.log(typeof null); //? Answer: "object"
console.log(typeof NaN); //? Answer: "number" NaN stands for "Not-a-Number", but its type in JavaScript is actually number
console.log(0.1 + 0.2 === 0.3);
