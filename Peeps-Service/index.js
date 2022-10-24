const express = require("express");
const app = express();

const { randomBytes } = require("crypto");

app.use(express.json());

const peepsBySquawkId = {};

app.post("/birdsquawk/:id/peeps", (req, res) => {
  const peepId = randomBytes(8).toString("hex");
  const { peep } = req.body;
  const peeps = peepsBySquawkId[req.params.id] || [];
  peeps.push({ id: peepId, peep });
  peepsBySquawkId[req.params.id] = peeps;
  res.status(201).send(peeps);
});

app.get("/birdsquawk/:id/peeps", (req, res) => {
  res.status(201).send(peepsBySquawkId[req.params.id] || []);
});

app.listen(5001, () => console.log(`peeps server start on port ${5001}`));
