function createCounter() {
  let counter = 0;
  return {
    incement: function () {
      counter++;
      console.log(counter);
    },
    decrement: function () {
      counter--;
      console.log(counter);
    },
  };
}

const MyCounter = createCounter();
MyCounter.incement(); //?output:1

MyCounter.decrement(); //?output:0
