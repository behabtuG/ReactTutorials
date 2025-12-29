//13. Create a Custom Logger
//Create a custom logger to capture different levels of logging (e.g., info, warn, error) in your application.
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

//Create a logs directory if it doesn't exist
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

//simple log levels
const logLevels = {
  info: chalk.blue,
  warn: chalk.yellow,
  error: chalk.red,
};

//Logger function
const logger = (level, message) => {
  const timestamp = new Date().toISOString();

  //validate log level
  if (!logLevels[level]) {
    console.log(chalk.gray(`[${timestamp}] [UNKNOWN LEVEL]: ${message}`));
    return;
  }

  //Prepare the log message with color
  const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}`;

  //Output to console with colors
  console.log(logLevels[level](logMessage));

  //write to log file
  const logFile = path.join(logDir, `${level}.log`);
  fs.appendFileSync(logFile, logMessage + "\n");
};
//Usage examples
logger("info", "App Started");
logger("warn", "This is a warning message.");
logger("error", "This is an error message.");
