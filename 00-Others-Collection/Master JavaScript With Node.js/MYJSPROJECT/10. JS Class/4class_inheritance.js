/*
Class inheritance in JS
*/

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
}

class Manager extends Employee {
  createReport() {
    console.log("Manager Report Created");
  }
}

let manager1 = new Manager("Behabtu", 1236, "behabtu@gmail.com");

manager1.createReport();
console.log(manager1.getName());
console.log(manager1.getId());
