const text = "Peoples often write hello world while programming";
const regex = /hello world/;
const result = text.match(regex);
// console.log(result); // true

//?find many
//?1.using match
const text2 = "Peoples often write hello world while programming ";
const regex2 = /hello world/g;
const result2 = text2.match(regex2);
// console.log(result2); // [ 'hello world', 'hello world' ]

//?2.using matchAll
const text3 = "Peoples often write hello world while programming";
const regex3 = /hello world/g;
const result3 = [...text3.matchAll(regex3)];
// result3.forEach((res) => console.log(res));

//? case insensitive
const text4 = "Peoples often write HELLO WORLD while programming ";
const regex4 = /hello world/gi;
const result4 = [...text4.matchAll(regex4)];
// result4.forEach((res) => console.log(res));

//?find capital letter
const text5 = "Peoples often write HELLO WORLD while programming";
const regex5 = /[A-Z]/g;
const result5 = text5.match(regex5);
// console.log(result5);

//?if we would like to ignore the "P" letter:
const text6 = "Peoples often write HELLO WORLD while programming";
const regex6 = /[A-OQ-Z]/g; //? OR
/* This code snippet is demonstrating how to use a negative lookahead in a regular expression to match
capital letters excluding a specific letter, in this case, the letter "P". */
const text7 = "Peoples often write HELLO WORLD while programming";
const regex7 = /(?![P])[A-Z]/g;
const result7 = text7.match(regex7);
// console.log(result7);

//?find digits
const text8 = "Some 2000 text hello world x190 xyz";
const regex8 = /\d/g;
const result8 = text8.match(regex8);
// console.log(result8);

//? add + to the patter to get full numbers
const text9 = "Some 2000 text hello world x190 xyz";
const regex9 = /\d+/g;
const result9 = text9.match(regex9);
// console.log(result9);

//?replace
const text10 = "my favourite number is 7";
const regex10 = /\d+/g;
const blank = text10.replace(regex10, "?");
// console.log(blank);

//?search and exec
const text11 = "Hello world world 1000 xyz";
const regex11 = /world/g;
const result11 = text11.search(regex11);
// console.log(result11);

//?exec
const text12 = "Hello world world 1000 xyz";
const regex12 = /world/g;
let arr;
while ((arr = regex12.exec(text12)) !== null) {
  //   console.log(`Found ${arr[0]}. Next starts at ${regex12.lastIndex}`);
}

//?Found world. Next starts at 11
//?Found world. Next starts at 17

//?validate email
const email = "test-email@pyplane.com";
const regex13 = /^[^\s@]+@[^\s@]+\.[^s@]+$/g;
const result13 = email.match(regex13);
// console.log(result13);

//? Multiple "@"
const email2 = "test-email@pyplane@com";
const regex14 = /^[^\s@]+@[^\s@]+\.[^s@]+$/g;
const result14 = email2.match(regex14);
console.log(result14);
