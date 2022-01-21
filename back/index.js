import express, { json } from "express";
import cors from "cors";

const server = express();
server.use(json());
server.use(cors());

server.listen(5000);

let user = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
  const signUpUser = req.body;

  if (user.length === 0) {
    user.push(signUpUser);
  } else {
    user = [signUpUser];
  }

  res.send("OK");
});

server.post("/tweets", (req, res) => {
  const tweet = req.body;
  tweets.push({ ...tweet, avatar: user[0].avatar });

  res.send("OK");
});

server.get("/tweets", (req, res) => {
  res.send(tweets);
});
