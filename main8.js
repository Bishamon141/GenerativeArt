import Two from "two.js"
import { Noise } from 'noisejs';

const noise = new Noise(Math.random());

noise.seed(Math.random())

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function normalizeValue(value) {
  return (value + 1) / 2; // Shift and scale to range from 0 to 1
}
// Setup two sceme
var params = {
  fullscreen: true
}
var elem = document.body;
var two = new Two(params).appendTo(elem);

const GRID_SIZE = 20;

// Draw grid
const drawGrid = (size=GRID_SIZE) => {
  for(let x = 0; x < two.width; x+= size) {
    for(let y = 0; y < two.width; y+= size) {

      // noise value
      var value = noise.perlin2(x / 200, y / 200);
      value = normalizeValue(value); 
      const roundedValue = value < .5 ? 0 : 1;

      console.log(`Perlin noise at (${x}, ${y}): ${value}`);
      
      const rect = two.makeRectangle(x, y, 10 , 10 )
      rect.fill = 'hsla(240, 50%, 50%, '+ roundedValue +' )';
      rect.stroke = '';
    }
  }
}

drawGrid(GRID_SIZE)


// Build stuff
two.update();