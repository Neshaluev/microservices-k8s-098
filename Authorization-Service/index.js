const express = require("express");
const app = express();

// const crypto = require("crypto-js");
const { randomBytes } = require("crypto");

app.use(express.json());

const squawkData = {};

app.post("/birdsquawk", (req, res) => {
  // делаем рандомынй айди
  const id = randomBytes(8).toString("hex");
  const { title } = req.body;
  squawkData[id] = { id, title };
  res.status(201).send(squawkData[id]);
});

app.listen(5000, () => console.log(`birdsquawk server start on port ${5000}`));
