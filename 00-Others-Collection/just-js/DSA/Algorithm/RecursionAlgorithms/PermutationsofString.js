const permute = (str, prefix = "") => {
  if (str.length === 0) {
    console.log(prefix); // Base case
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.slice(0, i) + str.slice(i + 1); // Remaining string
      permute(rem, prefix + str[i]); // Recursive call
    }
  }
};

console.log(permute("ABC"));
/*
Output:
ABC
ACB
BAC
BCA
CAB
CBA
*/
