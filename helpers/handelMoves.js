function HandelMoves(grid, color) {
  //first chnage color of source to :color and chnage neighbours
  //color if theya re same as source

  grid[0][0] = color;

  changeColor(0, 0, color, grid);

  return grid;
}

function changeColor(r, c, color, grid) {
  if (r < 0 || c < 0 || r > grid.length || c > grid[0].length) {
    return;
  }

  grid[r][c] = color;

  //top
  changeColor(r - 1, c, grid, color);

  //bottom
  changeColor(r + 1, c, grid, color);

  //right
  changeColor(r, c + 1, grid, color);

  //left
  changeColor(r, c - 1, grid, color);
}

module.exports = HandelMoves;

function HandelMoves(grid, color) {
  const sourceColor = grid[0][0];
  if (sourceColor === color) {
    return grid; // If the source color is the same as the target color, no need to update
  }

  // Change color starting from grid[0][0]
  changeColor(0, 0, color, sourceColor, grid);

  return grid;
}

function changeColor(r, c, color, sourceColor, grid) {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] !== sourceColor
  ) {
    return;
  }

  grid[r][c] = color;

  // Recursively change color for neighboring cells
  changeColor(r - 1, c, color, sourceColor, grid); // Top
  changeColor(r + 1, c, color, sourceColor, grid); // Bottom
  changeColor(r, c - 1, color, sourceColor, grid); // Left
  changeColor(r, c + 1, color, sourceColor, grid); // Right
}

module.exports = HandelMoves;
