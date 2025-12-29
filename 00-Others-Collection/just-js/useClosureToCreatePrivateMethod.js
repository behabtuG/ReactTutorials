function myModule() {
  let privateVar = "i am private";
  return {
    publicMethod: function () {
      console.log("Accessing privateVar from publicMethod:", privateVar);
    },
  };
}

let instance = new myModule();
instance.publicMethod(); //? output: Accessing privateVar from publicMethod: i am private
console.log(instance.privateVar); //? Undefined, as it's not accessible directly
