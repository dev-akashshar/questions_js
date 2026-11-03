// Q32: Create a POST route that accepts JSON data and logs it.

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
