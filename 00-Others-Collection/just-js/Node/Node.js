//?1. fs (File System) Module
const fs = require("fs");

// Print directory and file name
console.log("Directory:", __dirname);
console.log("File:", __filename);

// Write to a file
fs.writeFileSync(__dirname + "/output.txt", "Hello, Node.js!", "utf8");

console.log("File written successfully!");
//process
// console.log(process.env);

// Writing to a file
fs.writeFileSync("example.txt", "Hello, Node.js!", "utf8");
// Reading from a file
const data = fs.readFileSync("example.txt", "utf8");
console.log(data); // Output: Hello, Node.js!

// Writing to a file asynchronously
/* fs.writeFile("example1.txt", "Hello, Behabtu", "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully.");

  // Reading the file asynchronously
  fs.readFile("example1.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    console.log("File content:", data); // Output: Hello, Behabtu
  });
});
*/
//? 2. path Module
const path = require("path");

const filePath = path.join(__dirname, "example.txt");
console.log(filePath); // Outputs the full file path

console.log(path.basename(filePath)); // Output: example.txt
console.log(path.extname(filePath)); // Output: .txt

//?3. os Module
const os = require("os");

console.log("Platform:", os.platform()); // Example: 'darwin' (macOS), 'win32' (Windows)
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("CPU Info:", os.cpus());
console.log("Home Directory:", os.homedir());
console.log("Uptime:", os.uptime());

//?4. http/https Modules
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

//server.listen(3000, () => {
// console.log("Server running at http://localhost:3000/");
//});

//https example
const https = require("https");
/*https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log("Data:", JSON.parse(data));
  });
});
*/
//?5. events Module

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// Define an event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Trigger the event
eventEmitter.emit("greet", "Alice");

//?util Module
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

readFileAsync("example.txt", "utf8")
  .then((data) => {
    console.log("---data--", data);
  })
  .catch((err) => {
    console.error(err);
  });

//?crypto  Module
const crypto = require("crypto");

// Hashing a string
const hash = crypto.createHash("sha256").update("password").digest("hex");
console.log("Hash:", hash);

// Generating a random token
crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log("Random Token:", buffer.toString("hex"));
});
