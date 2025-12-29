const fs = require("fs");

// Create the resources directory if it doesn't exist
/*const resourcesDir = "./resources";
if (!fs.existsSync(resourcesDir)) {
  fs.mkdirSync(resourcesDir);
}
*/
// Log the current working directory
console.log("Current working directory:", process.cwd());

// Read from file
fs.readFile("resources/read.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file: ", err);
    return;
  }
  console.log("Content of read.txt:", data);
});

// Content to append
const content = "JS is so easy!";

// Append to file
fs.appendFile("resources/write.txt", content, "utf-8", (err) => {
  if (err) {
    console.error("Error writing the file: ", err);
    return;
  }
  console.log("Content appended to write.txt");
});
