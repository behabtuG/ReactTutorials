/*
Actually, you cannot access a variable without declaring it first.
But, you can force JS to auto-declare it by writing value to a variable.
*/

function abc() {
  a = 100;
}

abc();
console.log(a);
