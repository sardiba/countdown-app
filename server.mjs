import { createServer } from "http";

// Create a local server to receive data from
const server = createServer((request, response) => {
  console.log("request");
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      data: "I AM JSON!",
    })
  );
});

server.listen(8000);
