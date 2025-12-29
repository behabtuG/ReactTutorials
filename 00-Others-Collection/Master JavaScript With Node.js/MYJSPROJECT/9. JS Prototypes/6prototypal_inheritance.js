/*
Changeing default prototype object
*/

const animal = {
  name: "Animal",
  jump: function () {
    console.log(`${this.name} jumps`);
  },
  play: function () {
    console.log(`${this.name} plays`);
  },
};

const dog = {
  name: "Jax",
  __proto__: animal,
};

const cat = {
  name: "Bella",
  __proto__: animal,
};

dog.jump();
cat.play();
