//1.A clousre is a function that remembers its outervariables even after the outer function has finished executing

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); //1
console.log(counter()); //2
