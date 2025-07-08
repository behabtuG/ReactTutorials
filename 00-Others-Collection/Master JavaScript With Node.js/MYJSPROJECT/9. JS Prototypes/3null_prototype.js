/*
Null Prototype Object
*/

const a = {};

function b() {}

const c = {};

a.__proto__.Prop1 = "Test Prop1";

console.log(a.Prop1);
console.log(b.Prop1);
console.log(c.Prop1);
