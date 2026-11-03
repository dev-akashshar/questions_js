// Q31: Use route parameters to capture user ID from /user/:id.

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
