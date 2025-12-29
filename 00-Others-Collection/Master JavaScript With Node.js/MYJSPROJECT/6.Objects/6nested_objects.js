//How to create nested objects

let obj2 = {
  firstName: "Kidest",
  lastName: "Anteneh",
  age: 8,
  class: 1,
  address: {
    addressLine1: "221b Baker St",
    addressLine2: "1 Flr",
    city: "London",
    postalCode: 2569,
    country: "UK",
  },
};
obj2.address.zone = "prime";
console.log(obj2);
console.log(obj2.address);
