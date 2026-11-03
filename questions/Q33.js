// Q33: Use body-parser middleware to parse incoming request bodies.
// Objective: Parse JSON and URL-encoded request bodies in Express.
// Explanation: Express middleware converts incoming payloads into usable properties on req.body. The extended option controls how nested URL-encoded data is parsed. Concept: body parsing middleware.


const express = require("express");
const app = express();

// Modern Express built-in body parsing middleware
app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses form-urlencoded

app.post("/submit", (req, res) => {
  res.json({ message: "Body parsed successfully", body: req.body });
});

console.log("Body parsing middleware enabled for JSON and Form URL-encoded bodies.");
