//let str1=”http://ghthsbn/forms/requests/sql/requester=/?cacheid=a5300fgh”. Find out cacheid from string str1.
let str1 = "http://ghthsbn/forms/requests/sql/requester=/?cacheid=a5300fgh";

// Using regular expression to extract cacheid
let match = str1.match(/cacheid=([^&]+)/);

if (match) {
  let cacheid = match[1];
  console.log("cacheid:", cacheid); // Output: "a5300fgh"
} else {
  console.log("cacheid not found.");
}
