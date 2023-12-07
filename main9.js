import Two from "two.js";

// Setup Two.js scene
let params = {
  fullscreen: true
};
let elem = document.body;
let two = new Two(params).appendTo(elem);

const GRID_SIZE = 80;

// Function to draw a single hexagon (rotated)
const drawHexagon = (x, y, size) => {
  let hexagon = new Two.Path([
    new Two.Anchor(x + size * Math.cos(Math.PI / 6), y + size * Math.sin(Math.PI / 6)),
    new Two.Anchor(x + size * Math.cos(Math.PI / 2), y + size * Math.sin(Math.PI / 2)),
    new Two.Anchor(x + size * Math.cos(5 * Math.PI / 6), y + size * Math.sin(5 * Math.PI / 6)),
    new Two.Anchor(x + size * Math.cos(7 * Math.PI / 6), y + size * Math.sin(7 * Math.PI / 6)),
    new Two.Anchor(x + size * Math.cos(3 * Math.PI / 2), y + size * Math.sin(3 * Math.PI / 2)),
    new Two.Anchor(x + size * Math.cos(11 * Math.PI / 6), y + size * Math.sin(11 * Math.PI / 6))
  ], true, false);
  hexagon.fill = 'transparent';
  hexagon.stroke = 'black';
  hexagon.linewidth = 2;
  return hexagon;
};

// Draw hexagonal grid (rotated)
const drawGrid = (size = GRID_SIZE) => {
  const hexWidth = size * Math.sqrt(3);
  const hexHeight = size * 1.5;

  const rows = Math.floor(two.height / hexHeight);
  const cols = Math.floor(two.width / hexWidth);

  for (let row = 0; row < rows + 2; row++) {
    for (let col = 0; col < cols + 2; col++) {
      const x = col * hexWidth + (row % 2) * hexWidth / 2;
      const y = row * hexHeight;
      let hex = drawHexagon(x, y, size);
      two.add(hex);
    }
  }
};

drawGrid(GRID_SIZE);

// Render the scene
two.update();
