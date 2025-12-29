//7. Handle Uncaught Exceptions and Unhandled Rejections
//Avoid app crashes by handling uncaught exceptions and unhandled promise rejections.

//this code listens for uncaught exceptions in your Node.js application. an uncaught exception occurs when an
//error is thrown and not caught by any try-catchb block

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); //exit the process to avoid undefined state
});

//this part of the code listens for unhandled promise rejections. a promise rejection occurs when a promise is rejected
//(usually becuase of an error), but there is no .catch() method or try-catch block to handle the rejection.

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection ", reason);
  process.exit(1); //exit the process to avoid undefined state
});
