const express = require("express");

const server = express();
server.use(express.json());

const logger = require("./middleware/logger.js");

const userRouter = require("./users/userRouter.js");

server.use("/api/users", logger, userRouter);
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
