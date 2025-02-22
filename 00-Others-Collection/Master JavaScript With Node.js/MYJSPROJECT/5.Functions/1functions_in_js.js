/*
Functions:
    1. Block of clode which performs specific task 
    2. Can be called multiple times
*/

function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

function abc() {
  console.log("I am abc");
}

addNumbers(10, 20);
abc();
addNumbers(2556, 258);

//output: 30
//       I am abc
//       2814
