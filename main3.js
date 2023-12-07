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
      //two.makeLine(10, 20 ,30 ,40)
      const rect1 = two.makeRectangle(x , y, Math.random()*80, Math.random()*20)
      const rotation =  Math.random() * 5;
      rect1.fill = 'hsla(200, 100%, 50%,' + Math.random() * 5;
      rect1.rotation = rotation;
      rect1.linewidth = 0
      const rect2 = two.makeRectangle(x , y, Math.random()*80, Math.random()*20)
      rect2.fill = 'hsla(50, 80%, 50%,' + Math.random() * 1;
      rect2.rotation = rotation;
      rect2.linewidth = 1;
      rect2.stroke = 'white'
    }
  }
}

drawGrid(30)


// Build stuff
two.update();