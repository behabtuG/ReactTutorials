/*
How to create methods in JS class?
*/

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Car Starts");
  }

  stop() {
    console.log("Car Stops");
  }
}

let car1 = new Car("Honda", "CRV");
car1.start();
car1.stop();
