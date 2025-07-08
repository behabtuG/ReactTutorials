/*
The setInterval function allows you to execute a function repeatedly, 
starting after a specified number of milliseconds and then repeating 
continuously at that interval.
*/

let interval1 = setInterval(fun1, 3000);
let c = 0;
function fun1() {
  c++;
  console.log("Interval Function 1");
  if (c > 4) {
    clearInterval(interval1);
  }
}
let c1 = 0;
let interval2 = setInterval(() => {
  c1++;
  console.log("Interval Function 2");
  if (c1 > 4) {
    clearInterval(interval2);
  }
}, 2000);

console.log("Rest of the code..");
