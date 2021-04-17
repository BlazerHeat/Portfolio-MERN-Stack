//pre-processes
require("dotenv").config();
require("./database/connect");

//importing modules
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const Message = require("./database/models/message");

const PORT = process.env.PORT || 5050;

//middleware
app.use(express.json());
app.use(express.static("build"));
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "https://edu-dyno.herokuapp.com",
    credentials: true,
  })
);

//main routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "build/index.html"));
});

app.post("/feedback", (req, res) => {
  console.log("got message");
  const { name, message } = req.body;
  if (!name || !message) {
    res.status(200).end();
    return;
  }

  new Message({ name: name, message: message }).save();

  res.status(202).end();
});

//starting server
app.listen(PORT, () => {
  console.log("\x1b[36m%s\x1b[0m", `Server listening on port: ${PORT}`);
});
