//?Create a program to find out string contains any specific sub string and at what position.
const mainString = "Hello, world!";
const subString = "world";

// Find the position of the substring in the main string
const position = mainString.indexOf(subString);

if (position !== -1) {
  console.log(
    `The substring "${subString}" is found in the main string "${mainString}" at position ${position}.`
  );
} else {
  console.log(
    `The substring "${subString}" is not found in the main string "${mainString}".`
  );
}
