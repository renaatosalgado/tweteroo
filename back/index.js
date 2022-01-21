import express, { json } from "express";
import cors from "cors";

const server = express();
server.use(json());
server.use(cors());

server.listen(5000);

let user = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
  if (req.body.avatar !== "" && req.body.username !== "") {
    const signUpUser = req.body;

    if (user.length === 0) {
      user.push(signUpUser);
    } else {
      user = [signUpUser];
    }
  } else {
    res.status(400).send("Todos os campos são obrigatórios!");
  }

  res.status(201).send("OK");
});

server.post("/tweets", (req, res) => {
  console.log(req.body);
  if (req.body.username !== "" && req.body.tweet !== "") {
    const tweet = req.body;
    tweets.push({ ...tweet, avatar: user[0].avatar });
  } else {
    res.status(400).send("Todos os campos são obrigatórios!");
  }

  res.status(201).send("OK");
});

server.get("/tweets", (req, res) => {
  res.send(tweets.slice(-10));
});
