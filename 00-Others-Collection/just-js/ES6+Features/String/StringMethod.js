//? 1. length of the string // returns the number of characters in a string.
let names = "Behabtu Getnet";
console.log(names.length); //?output:6
//? 2. string.tolowerCase(); // converts the string to lowercase letters.
let text = "HELLO, WORLD";
console.log(text.toLowerCase()); //?output:hello, world
//? 3. string.toUpperCase(); // converts the string to uppercase letters.
let text1 = "hello, world";
console.log(text1.toUpperCase()); //?output:HELLO, WORLD
//? 4. string.indexOf(searchValue, fromIndex) //find the 1st occurrence of of a specified string and return its position.
let message = "Hello, how are you?";
let position = message.indexOf("how");
console.log(position); //?output:7
//? 5. string.substring(indexStart, indexEnd) // extracts a part of a string b/n two specified positions and return a new string
let messages = "I love JavaScript";
let result = messages.substring(2, 6);
console.log(result); //?output:love
//? 6. string.split(separator, limit) //divides a string into an array of substrings based on specified delimiter
let str = "I am learning JavaScript";
let words = str.split(" ");
console.log(words); //?output: [ 'I', 'am', 'learning', 'JavaScript' ]

//? 7. string.replace(searchValue, replaceValue) //searches a string for a specified value and replaces it with an new value
let replaceValue = "I love cats";
let newvalue = replaceValue.replace("cats", "dogs");
console.log(newvalue); //?output:I love dogs

//? 8. string.replaceAll(searchValue, replaceValue)
let date = "1999/06/08";
console.log(date.replaceAll("/", "_")); //?output:1399_06_08

//? 9. string.trim() //removes whitespace from both the begining and end of a string
let input = "   Hello, World!   ";
let trimmedInput = input.trim();
console.log(trimmedInput); //?output:Hello, World!

//? 10. string.trimStart() //removes whitespace from the beginning of a string
let input1 = " Hello, World!  ";
let trimmedStartInput = input1.trimStart();
console.log(trimmedStartInput); //? Output: "Hello, World!   "

//? 11. string.trimEnd() //removes whitespace from the end of a string
let trimmedEndInput = input1.trimEnd();
console.log(trimmedEndInput); //? Output: "   Hello, World!"

//? 12. string.charAt(index) //Returns the character at the specified index.
let strs = "Hello, World!";
console.log(strs.charAt(7)); //? Output: "W"

//? 13. string.charCodeAt(index) //Returns the Unicode value of the character at the specified index.
console.log(strs.charCodeAt(7)); //? Output: 87 (Unicode for "W")

//? 14. string.concat(string1, string2, ..., stringN) //Joins two or more strings.
let str1 = "Hello";
let str2 = ", World!";
console.log(str1.concat(str2)); //? Output: "Hello, World!"

//? 15. string.endsWith(searchString, length) //Checks if the string ends with the specified substring.
let str3 = "Hello, World!";
console.log(str3.endsWith("World!")); //? Output: true
console.log(str3.endsWith("Hello", 5)); //? Output: true

//? 16. string.includes(searchString, position) //Checks if the string contains the specified substring.
let str4 = "I love!";
console.log(str4.includes("ove")); //? Output: true
console.log(str4.includes("I", 2)); //? Output: false

//? 17. string.match(regexp) //Matches the string against a regular expression.
let str5 = "Hello, World!";
console.log(str5.match(/o/g)); //? Output: ["o", "o"]
console.log(str5.match(/lo/g)); //? Output: ["lo"]

//? 18. string.matchAll(regexp) //Returns all matches of a string against a regular expression.
let str6 = "Hello, World!";
const matches = str6.matchAll(/o/g);
for (const match of matches) {
  console.log(match); //? Output: ["o"], ["o"]
}

//? 19. string.lastIndexOf(searchValue, fromIndex) //Returns the last occurrence of the specified value.
let str7 = "Hello, World!";
console.log(str7.lastIndexOf("o")); //? Output: 8

//? 20. string.localeCompare(compareString, locales, options) //Compares two strings in a specific locale.
console.log("a".localeCompare("b")); //? Output: -1 (because "a" comes before "b")

//? 21. string.normalize(form) //Normalizes a string to a specified Unicode normalization form.
let accentedStr = "\u00E9"; // é
console.log(accentedStr.normalize("NFD")); //? Output: "é"

//? 22. string.padStart(targetLength, padString) //Pads the string at the start to a specified length.
console.log("World".padStart(10, ".")); //? Output: ".....World"

//? 23. string.padEnd(targetLength, padString) //Pads the string at the end to a specified length.
console.log("Hello".padEnd(10, ".")); //? Output: "Hello....."

//? 24. string.repeat(count) //Repeats the string a specified number of times.
console.log("Ha".repeat(3)); //? Output: "HaHaHa"

//? 25. string.search(regexp) //Searches the string for a match to a regular expression and returns the index.
let str8 = "Hello, World!";
console.log(str8.search(/World/)); //? Output: 7

//? 26. string.slice(start, end) //Extracts a section of a string.
let str9 = "Hello, World@!";
console.log(str9.slice(7, 15)); //? Output: "World@!"

//? 27. string.startsWith(searchString, position) //Checks if the string starts with the specified substring.
let str10 = "Hello, World@!";
console.log(str10.startsWith("Hello")); //? Output: true

//? 28. string.toLocaleLowerCase(locale, options) //Converts the string to lowercase, respecting locale-specific rules.
console.log("İSTANBUL".toLocaleLowerCase("tr")); //? Output: "istanbul"

//? 29. string.toLocaleUpperCase(locale, options) //Converts the string to uppercase, respecting locale-specific rules.
console.log("istanbul".toLocaleUpperCase("tr")); //? Output: "İSTANBUL"

//? 30. string.toString() //Returns the string itself.
let str11 = "Hello, World!";
console.log(str11.toString()); //? Output: "Hello, World!"

//? 31. string.valueOf() //Returns the primitive value of a string.
let str13 = new String("Hello, World!");
console.log(str13.valueOf()); //? Output: "Hello, World!"

//? 32. string.codePointAt(pos) //Returns the Unicode code point of the character at the specified position.
let str14 = "😊";
console.log(str14.codePointAt(0)); //? Output: 128522
console.log("😀".codePointAt(0)); //? Output: 128512
