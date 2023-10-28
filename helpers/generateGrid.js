function GenerateGrid() {
  let numIterations = 10;
  let color = ["green", "pink", "violet", "cyan", "red", "yellow"];
  let gridNumber = 0;

  let grid = [];
  let gridColors = new Array();

  let gridColorRow = [];

  for (let i = 0; i < numIterations; i++) {
    let row = [];
    for (let j = 0; j < numIterations; j++) {
      let randomColor = color[Math.floor(Math.random() * color.length)];

      gridColorRow[gridColorRow.length++] = randomColor;
    }
    gridColors[gridColors.length++] = gridColorRow;
    gridColorRow = [];
  }
  return gridColors;
}
module.exports = GenerateGrid;
