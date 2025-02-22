function outer() {
  let outerVar = "i am from the outer function";
  function middle() {
    let middleVar = "i am from the middle function";

    function inner() {
      let innerVar = "i am from the inner function";
      console.log(outerVar, middleVar, innerVar); //Accessable due toscope chain
      //? output:i am from the outer function i am from the middle function i am from the inner function
    }
    inner();
  }
  middle();
}

outer();
