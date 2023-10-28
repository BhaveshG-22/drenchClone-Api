const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const GenerateGrid = require("./helpers/generateGrid");
const HandelMoves = require("./helpers/handelMoves");

app.get("/", (req, res) => {
  let grid = GenerateGrid();
  res.send(grid);
});

app.post("/handelMoves", (req, res) => {
  const { grid, color } = req.body;

  let newGrid = HandelMoves(grid, color);
  // console.log(req.body);

  res.send(newGrid);
});

app.listen(4000, () => {
  console.log("DrenchClone-API Listening on PORT 4000");
});
