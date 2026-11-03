// Q32: Create a POST route that accepts JSON data and logs it.
// Objective: Accept and log JSON data in an Express POST route.
// Explanation: express.json() parses the incoming JSON body and stores it in req.body. The POST handler can then log or process the submitted data. Concepts: middleware, POST requests, and request bodies.


const express = require("express");
const app = express();

// Middleware to parse incoming JSON payload
app.use(express.json());

app.post("/data", (req, res) => {
  console.log("Received JSON Data:", req.body);
  res.status(201).json({ message: "Data logged successfully", data: req.body });
});

console.log("POST /data route ready to accept and log JSON.");

const server = app.listen(3004, () => {
  server.close();
});
