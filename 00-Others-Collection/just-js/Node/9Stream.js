//9. Use for Handling Large Files
// stream Instead of reading large files into memory all at once, use streams to handle large data efficiently.
const fs = require("fs");
const readableStream = fs.createReadStream("largeFile.txt");
readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
  // Process the chunk (e.g., parse, transform, etc.)
});
