const express = require("express");
const cors = require("cors");
const { addService } = require("./services/addService");
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/add", (req, res) => {
  const a = +req.query.a;
  const b = +req.query.b;
  const result = addService().add(a, b);
  res.send({ result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
