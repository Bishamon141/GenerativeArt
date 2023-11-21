import Two from "two.js"

// Setup two sceme
var params = {
  fullscreen: true
}
var elem = document.body;
var two = new Two(params).appendTo(elem);

const GRID_SIZE = 40;


// Draw grid
const drawGrid = (size=GRID_SIZE) => {
  for(let x = 0; x < two.width; x+= size) {
    for(let y = 0; y < two.width; y+= size) {
      two.makeLine(10, 20 ,30 ,40)
    }
  }
}

drawGrid()

// Build stuff
two.update();