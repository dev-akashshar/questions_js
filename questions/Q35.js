// Q35: Create a middleware that logs the request method and URL.
// Objective: Log the HTTP method and URL for every incoming request.
// Explanation: The custom middleware reads req.method and req.url, then calls next() so processing continues. It provides simple request logging. Concepts: middleware and the request lifecycle.


const express = require("express");
const app = express();

// Custom Logger Middleware
const requestLogger = (req, res, next) => {
  console.log(`[LOG] Method: ${req.method} | URL: ${req.url}`);
  next();
};

app.use(requestLogger);

// Test simulated middleware execution
requestLogger({ method: "GET", url: "/api/products" }, {}, () => {
  console.log("Middleware executed and passed control to next()");
});
