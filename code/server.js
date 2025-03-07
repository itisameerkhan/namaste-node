const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/getSecretData") {
    res.end("this is not secret");
  }

  res.end("hello world");
});

server.listen(7777, () => {
  console.log("server listening to PORT: ", 7777);
});
