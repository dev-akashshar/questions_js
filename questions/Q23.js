// Q23: Setup a basic Node.js server that returns "Hello from Node" on the browser.
// Objective: Create a Node.js server that sends a text response.
// Explanation: The http module creates a server and responds with a status, content type, and message. listen() starts the server on the selected port. Concepts: Node.js HTTP server and response headers.


const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  server.close(); // Closed for automated lab test
});
