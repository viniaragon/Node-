const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Welcome to our home page</h1>");
  }
});

server.listen(port, () => console.log(`servidor rodando na porta ${port}`));
