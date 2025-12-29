//9. Prototypes
//prototypes allow objects to inherit properties and methods
function Car(name) {
  this.name = name;
}
Car.prototype.getName = function () {
  return this.name;
};

const myCar = new Car("Tesla");
console.log(myCar.getName()); //Tesla
