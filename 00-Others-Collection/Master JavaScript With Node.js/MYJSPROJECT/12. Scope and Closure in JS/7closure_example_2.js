/*
Create a Multilingual Greeting with Closure
*/

function createGreeting(grtMsg) {
  return function (name) {
    return grtMsg + ", " + name;
  };
}

let englishGreet = createGreeting("Hello");
let hindiGreet = createGreeting("Namaste");

console.log(englishGreet("Kidest"));
console.log(hindiGreet("Behabtu"));
