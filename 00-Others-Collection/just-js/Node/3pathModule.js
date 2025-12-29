//3. Using path module to handle file paths
//avoid issues with file paths across different operating systems by using node's path module
const path = require("path");

//Join multiple segments into a single path
const fullPath = path.join(__dirname, "folder", "subfolder", "file.txt");
const fileName = path.join(__dirname, "folderName", "file.txt");
console.log("Joined Path:", fullPath); //Properly resolves the path
console.log("File Name Path:", fileName); //Properly resolves the path
