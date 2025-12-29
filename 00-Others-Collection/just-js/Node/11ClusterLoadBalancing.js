//11. Use cluster for Load Balancing
//Leverage Node.js's module to utilize multiple CPU cores for better performance and load balancing in production.

const cluster = require("cluster");
const http = require("http");
const os = require("os");
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // Fork workers (one per CPU)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new worker.`);
    // cluster.fork(); // Restart the worker if it dies
  });
} else {
  // Worker processes have their own HTTP server
  http
    .createServer((req, res) => {
      //Log the worker that is handling the request
      console.log(`Worker ${process.pid} is handling request`);

      //Define routes and Logic for different requests
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello from Worker ${process.pid}! You are on the home page.`);
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello from Worker ${process.pid}! You are on the about page.`);
      } else if (req.url === "/api/data") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "This is some API data. ",
            workerId: process.pid,
          })
        );
      } else {
        //Handle unknown routes
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`Worker ${process.pid} Could not find the requested page.`);
      }
    })
    .listen(8000, () => {
      console.log(`Worker ${process.pid} is listening on port 8000`);
    });
}
