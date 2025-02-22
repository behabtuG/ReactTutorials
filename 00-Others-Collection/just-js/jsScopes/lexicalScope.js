function outerFunction() {
  let outerVar = "Hello from outside!";
  return function () {
    console.log(outerVar); //? Has access to outerVar due to lexical scope
  };
}

const inner = outerFunction();

inner(); //? outPut: Hellow fromthe outside!
