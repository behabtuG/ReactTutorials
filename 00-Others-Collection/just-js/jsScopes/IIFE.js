//? immediate invoked function execution(IIFE) for Scope

(function () {
  let privateVar = "Secret";
  console.log(privateVar); //? output: Secret
})();

console.log(privateVar); //? output: ReferenceError: privateVar is not defined
