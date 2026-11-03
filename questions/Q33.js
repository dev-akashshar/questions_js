// Q33: Use body-parser middleware to parse incoming request bodies.

const express = require("express");
const app = express();

// Modern Express built-in body parsing middleware
app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses form-urlencoded

app.post("/submit", (req, res) => {
  res.json({ message: "Body parsed successfully", body: req.body });
});

console.log("Body parsing middleware enabled for JSON and Form URL-encoded bodies.");
