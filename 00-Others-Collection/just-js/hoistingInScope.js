console.log(varVariable); //? output: undefined due to hoisting

console.log(letVariable); //? Uncaught ReferenceError due to temporal dead zone
console.log(constVariable); //? Uncaught ReferenceError due to temporal dead zone

var varVariable = "Defined";
let letVariable = "Defined";
const constVariable = "Defined";
