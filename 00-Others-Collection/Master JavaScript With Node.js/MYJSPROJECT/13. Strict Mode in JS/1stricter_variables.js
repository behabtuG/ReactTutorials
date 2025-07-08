/*
Strict mode is a feature in JavaScript introduced in ECMAScript 5 (ES5) 
that allows you to opt into a more restricted and safer subset of the language. 
When you enable strict mode in your JavaScript code, the interpreter enforces 
stricter rules and generates more informative error messages for certain behaviors 
that are considered as mistakes or potential sources of bugs.
*/
"use strict";

//a = 100; // Not allowed in Strict Mode

undefined = 200; // Not allowed in Strict Mode

function abc() {
  x = 700; // Not allowed in Strict Mode
}
abc();

console.log(undefined);
//console.log(a);
