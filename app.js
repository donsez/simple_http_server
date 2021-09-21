const http = require('http');

const requestListener = function (req, res) {
  console.log("Request:", req);
  res.writeHead(200);
  res.end('<h1>Hello, World!</h1>');
}

const server = http.createServer(requestListener);
server.listen(8080);

console.log("Listening on port 80");