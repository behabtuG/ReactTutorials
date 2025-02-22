/*
"Callback hell" (sometimes referred to as "Pyramid of Doom") is a term used
to describe a situation in which multiple nested callbacks become difficult
to manage, read, and maintain. Asynchronous operations relying solely on callbacks
can lead to deeply nested structures, making the code harder to follow.
*/

/*
Example Case: Data Transfer
1. Read Data: Start by reading the content from a file named read.txt.
2. Append Data: Take the data you've read from read.txt and append it to another file called write.txt.
3. Read Appended Data: Read the content you just appended to write.txt.
4. Write to New File: Create a new file, and write the data you've just read from write.txt into this new file.
*/

const fs = require("fs");

fs.readFile("resources/read.txt", "utf-8", (err, data1) => {
  if (err) {
    console.error("Error Reading read.txt: ", err);
    return;
  }
  fs.appendFile("resources/write.txt", "\n" + data1, "utf-8", (err) => {
    if (err) {
      console.error("Error Writing write.txt: ", err);
      return;
    }

    fs.readFile("resources/write.txt", "utf-8", (err, data2) => {
      if (err) {
        console.error("Error Reading write.txt: ", err);
        return;
      }

      fs.writeFile("resources/writeNew.txt", data2, "utf-8", (err) => {
        if (err) {
          console.error("Error Writing writeNew.txt: ", err);
          return;
        }
        console.log("Success!");
      });
    });
  });
});
