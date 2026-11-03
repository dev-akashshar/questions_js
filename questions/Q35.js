// Q35: Create a middleware that logs the request method and URL.

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
