//? write a function in JS that converts a given string to title case.

const toTitleCase = (str) => {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};

console.log(toTitleCase("the quick brown fox")); //The Quick Brown Fox
