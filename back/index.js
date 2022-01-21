import express, { json } from "express";

const server = express();
server.use(json());

server.listen(5000);

const user = { username: "", avatar: "" };
const tweets = [];

server.post("/sign-up", (req, res) => {
  user.username = req.body.username;
  user.avatar = req.body.avatar;

  res.send("OK");
});
