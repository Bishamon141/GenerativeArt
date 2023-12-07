import Two from "two.js"

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Setup two sceme
var params = {
  fullscreen: true
}
var elem = document.body;
var two = new Two(params).appendTo(elem);

const GRID_SIZE = 50;

// Draw grid
const drawGrid = (size=GRID_SIZE) => {
  for(let x = 0; x < two.width; x+= size) {
    for(let y = 0; y < two.width; y+= size) {
      
      // Draw lines
      const randNum = Math.random();
      if(randNum<.25) {
        const line = two.makeLine(x,y,x+size,y)
        line.linewidth = 1;
        line.stroke = "hsla(120, 100%, 70%," + Math.random() + ")"
      }
      else if(randNum>.25 && randNum<.5 ) {
        const line = two.makeLine(x,y,x+size,y+size)
        line.linewidth = 1;
        line.stroke = "hsla(120, 100%, 70%," + Math.random() + ")"
      }
      else if(randNum>.5 && randNum<.75 ) {
        const line = two.makeLine(x,y,x-size,y+size)
        line.linewidth = 1;
        line.stroke = "hsla(120, 100%, 70%," + Math.random() + ")"
      }
      else {
        const line = two.makeLine(x,y,x,y+size)
        line.linewidth = 1;
        line.stroke = "hsla(120, 100%, 70%," + Math.random() + ")"
      }

      // Draw circles
      if(Math.random() < .2) {
        const circle = two.makeEllipse(x,y,5,5)
        circle.fill = "hsla(120, 100%, 100%," + Math.random() + ")"
        circle.stroke = 0
      }
    }
  }
}

drawGrid(GRID_SIZE)


// Build stuff
two.update();