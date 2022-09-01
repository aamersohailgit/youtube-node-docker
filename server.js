const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello, Programmers!");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});