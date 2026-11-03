// Q34: Enable CORS in your Express app and explain its purpose.

// Purpose of CORS (Cross-Origin Resource Sharing):
// It is a security mechanism that allows or restricts web applications running at one
// origin (domain/port) to access resources from a server at a different origin.

const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all incoming requests
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "CORS is enabled for this API route." });
});

console.log("CORS middleware enabled successfully.");
