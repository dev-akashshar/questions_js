// Q29: Create an Express server that listens on port 3000.

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
