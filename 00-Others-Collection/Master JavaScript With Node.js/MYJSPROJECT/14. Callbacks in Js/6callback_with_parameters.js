/*
Callback function with parameter
*/

function abc(num1, num2, fun1) {
  let num3 = num1 + num2;
  fun1(num3);
}

function f1(a) {
  console.log(a * a);
}

function f2(a) {
  console.log(a / 2);
}

function f3(a) {
  console.log(a / 3);
}

abc(10, 20, f1); // 10 + 20 = 30 => 30^2 = 900
abc(5, 6, f2); // 5 + 6 = 11 => 11/2 = 5.5
abc(100, 200, f3); // 100 + 200 = 300 = 300/3 = 100
