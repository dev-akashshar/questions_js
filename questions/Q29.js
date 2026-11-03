// Q29: Create an Express server that listens on port 3000.
// Objective: Create an Express server that listens on port 3000.
// Explanation: Express creates the application, and listen() starts accepting requests on port 3000. The root route sends a simple response. Concepts: Express app and server listening.


const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

const server = app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
  server.close(); // Closed for lab batch run
});
