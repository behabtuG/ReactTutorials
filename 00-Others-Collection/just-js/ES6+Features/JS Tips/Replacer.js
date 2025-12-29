const user = {
  name: "user",
  age: 30,
  password: "secret123",
  email: "user@gmail.com",
};

//?Replacer function to exlcude the password and modify the age of the user
function replacer(key, value) {
  if (key === "password") {
    return undefined;
  }
  if (key === "age") {
    return value + 5;
  }
  return value; //?return the value for all other keys
}

const jsonString = JSON.stringify(user, replacer, 2);
console.log(jsonString);
