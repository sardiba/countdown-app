import { createServer } from "http";

// Create a local server to receive data from
const server = createServer((request, response) => {
  console.log("request");
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
  ]);

  const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
  ]);

  switch (request.url) {
    case "/books":
      response.end(books);
      break;
    case "/authors":
      response.end(authors);
      break;
    default:
      response.end("oops.. something's wrong");
      break;
  }
});

server.listen(9000);
