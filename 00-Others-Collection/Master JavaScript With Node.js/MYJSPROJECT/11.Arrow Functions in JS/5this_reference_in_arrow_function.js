/*
Arrow functions do not have their own 'this' context; instead, they inherit the 'this' value from the enclosing lexical (parent) scope.
*/

const car = {
  make: "Toyota",
  model: "Land Cruiser",
  price: 60000,
  displayCar: function () {
    let displayMakeAndModel = () => {
      console.log(`${this.make} ${this.model}`);
    };
    let displayPrice = () => {
      console.log(`${this.price}`);
    };
    displayMakeAndModel();
    displayPrice();
  },
};
car.displayCar();
console.log(this);

const car2 = {
  make: "Toyota",
  model: "Land Cruiser",
  price: 60000,
  displayCar: () => {
    console.log(`${this.make} ${this.model}`);
  },
};
car2.displayCar();
