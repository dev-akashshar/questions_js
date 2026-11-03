// Q31: Use route parameters to capture user ID from /user/:id.
// Objective: Capture a user ID from an Express route parameter.
// Explanation: The :id placeholder accepts a value from the URL, and req.params provides that value. The server sends the captured ID in the response. Concept: route parameters.


const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Captured User ID: ${id}`);
});

console.log("Route configured: GET /user/:id -> req.params.id");

const server = app.listen(3003, () => {
  console.log("Server running on port 3003");
  server.close(); // Closed for batch execution
});
