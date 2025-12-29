//What's the output of running the following function using input 56?
const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letter_combinations_of_phone_number(digits) {
  // Handle empty input
  if (!digits) return [];

  let res = [];
  dfs(digits, [], res);
  return res;
}

function dfs(digits, path, res) {
  // If the current path is complete, join and add it to results
  if (path.length === digits.length) {
    res.push(path.join(""));
    return;
  }

  let currentDigit = digits.charAt(path.length);
  let letters = KEYBOARD[currentDigit];

  for (let letter of letters) {
    path.push(letter); // Choose
    dfs(digits, path, res); // Explore
    path.pop(); // Un-choose (backtrack)
  }
}

// Example usage
const input = "56";
const output = letter_combinations_of_phone_number(input);
console.log(output);
