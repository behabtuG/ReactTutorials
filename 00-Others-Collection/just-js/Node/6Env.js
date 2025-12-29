//6. Environment Variables with .env for Congigs
//Store configuration settings (like API keys or database URLs) in a .env file using the dotenv package to keep sensitive
// data secure and portable
//# .env file
//DB_HOST=localhost
//DB_USER=root
//DB_PASS=s1mpl3

//in your Node.js application
//load environment variables from .env file
require("dotenv").config();
console.log("Database Host:", process.env.DB_HOST); //localhost
