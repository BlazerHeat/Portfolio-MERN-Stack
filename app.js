//pre-processes
require("dotenv").config();
require("./database/connect");

//importing modules
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const Message = require("./database/models/message");
const Proposal = require("./database/models/proposal");

const PORT = process.env.PORT || 5050;

//middleware
app.use(express.json());
app.use(express.static("build"));
app.use(express.urlencoded({ extended: false }));


if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: ["https://vatsalghoghari2.herokuapp.com", "http://localhost:3000"],
      credentials: true,
    })
  );
}


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

app.post('/propose', (req, res) => {
  const { companyName, budget, projectName, projectDesc, companyEmail, contactNo } = req.body;

  new Proposal({ companyName, budget: Number(budget), projectName, projectDesc, companyEmail, contactNo }).save();

  res.status(202).end();
});

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.resolve('./client/build')));

  //main routes
  app.get("*", (req, res) => {
    res.status(202).sendFile(path.resolve("./client/build", "index.html"));
  });
}

//starting server
app.listen(PORT, () => {
  console.log("\x1b[36m%s\x1b[0m", `Server listening on port: ${PORT}`);
});
