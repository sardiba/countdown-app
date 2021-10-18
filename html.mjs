import { createServer } from "http";

// Create a local server to receive data from
const server = createServer((request, response) => {
  console.log("request");
  response.writeHead(200, {
    "Content-Type": "text/html",
  });
  response.end(
    `<html>
    <body>
      <h1>I AM HTML</h1>
    </body>
  </html>`
  );
});

server.listen(8500);
