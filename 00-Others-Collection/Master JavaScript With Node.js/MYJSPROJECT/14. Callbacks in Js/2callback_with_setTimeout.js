/*
The setTimeout function allows you to schedule a one-time execution
of a function after a specified number of milliseconds.
*/

setTimeout(fun1, 5000, 2400);

function fun1(x) {
  console.log(x);
}

setTimeout(() => {
  console.log("Fun2 Executed");
}, 6000);

console.log("Rest of the program...");
