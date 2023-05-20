// Require the 'http' module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello, World!\n');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
