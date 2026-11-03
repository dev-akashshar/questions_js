// Q30: Define routes for /home, /about, and /contact.

const express = require("express");
const app = express();

app.get("/home", (req, res) => res.send("Welcome to Home Page"));
app.get("/about", (req, res) => res.send("Welcome to About Page"));
app.get("/contact", (req, res) => res.send("Welcome to Contact Page"));

console.log("Routes configured: /home, /about, /contact");

const server = app.listen(3002, () => {
  console.log("Routes server running at http://localhost:3002");
  server.close(); // Closed for lab batch run
});
