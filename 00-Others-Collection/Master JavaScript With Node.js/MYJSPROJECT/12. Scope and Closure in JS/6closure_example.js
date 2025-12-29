/*
Creating a counter using closure
*/

/*function createCounter() {
  let c = 0;
  function inc() {
    return ++c;
  }
  return inc;
}
*/ //equall to arrow function below
function createCounter() {
  let c = 0;

  return () => ++c;
}

let counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log("--------ttttt--------");
let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
