/*
All objects created by a constructor share same prototype
*/

function Phone(make) {
  this.make = make;
}

let iPhone = new Phone("Apple");
let nexus = new Phone("Google");

if (Phone.prototype === iPhone.__proto__) {
  console.log("Same");
} else {
  console.log("Not Same");
}
