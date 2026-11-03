// Q23: Setup a basic Node.js server that returns "Hello from Node" on the browser.

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
