//?write a function in JS that returns the sum of two numbers without using the + operator.

const sum = (a, b) => {
  //   return a - -b; or
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};

console.log(sum(5, 3)); //8
