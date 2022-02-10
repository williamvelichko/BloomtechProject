const express = require("express");
const server = express();

require("dotenv").config();

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`listing on port: ${port}!!!`);
  console.log(process.env.MESSAGE);
});

server.use("*", (req, res) => {
  res.send("<h1>Hello smuck</h1>");
});
