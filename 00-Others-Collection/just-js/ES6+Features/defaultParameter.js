const greet = (name, greeting = "Hello") => `${greeting},${name}!`;
console.log(greet("kidest")); //output:Hello,kidest!
console.log(greet("kidest", "Goodbye")); //ouptput:Goodbye,kidest!
