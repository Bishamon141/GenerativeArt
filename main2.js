import Two from "two.js"

// Setup two sceme
var params = {
  fullscreen: true
}
var elem = document.body;
var two = new Two(params).appendTo(elem);

const GRID_SIZE = 40;

// Draw grid
const drawTriangle = (x, y, size = 10, fill='hsla(200, 100%, 50%, 0.5)') => {
  var triangle = two.makePolygon(x, y, size, 3);
  triangle.linewidth = 0; 
  triangle.fill = fill;
  triangle.rotation = Math.PI * 2 / Math.random() * 8
}

// Draw grid
const drawGrid = (size=GRID_SIZE) => {
  for(let x = 0; x < two.width; x+= size) {
    for(let y = 0; y < two.width; y+= size) {
      //two.makeLine(10, 20 ,30 ,40)
      drawTriangle(x*Math.random() , y*Math.random(), Math.random()*20)

    }
  }
}

drawGrid(30)


// Build stuff
two.update();