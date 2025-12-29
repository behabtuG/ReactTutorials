//11. Classes
//ES6 classes provide a cleaner syntax for objetc-oriented programmin.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
const dog = new Animal("Dog");
console.log(dog.speak()); //Dog makes a sound
