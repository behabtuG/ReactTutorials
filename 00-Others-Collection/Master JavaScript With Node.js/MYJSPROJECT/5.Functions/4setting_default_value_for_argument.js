/*
How to set default value of an argument?
*/

//How to use default value for first argument

function abc(num1 = 30, num2 = 60) {
  console.log(num1);
  console.log(num2);
}

abc(undefined, 20);
