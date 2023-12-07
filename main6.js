import Two from "two.js";

const canvas = document.getElementById("canvas");
const two = new Two(canvas);

const width = canvas.width;
const height = canvas.height;
const maxIterations = 256;

const colors = [
  "#000000", // Black
  "#0000FF", // Blue
  "#00FF00", // Green
  "#FFFF00", // Yellow
  "#FF0000", // Red
  "#FF00FF", // Purple
  "#00FFFF", // Cyan
  "#FFFFFF", // White
];

let currentIterations = 1; // Initial iteration count

function mandelbrot(real, imaginary) {
  let z = { real, imaginary };
  for (let i = 0; i < currentIterations; i++) {
    const modulus = Math.sqrt(z.real * z.real + z.imaginary * z.imaginary);
    if (modulus > 2.0) return i;
    z = {
      real: z.real * z.real - z.imaginary * z.imaginary + real,
      imaginary: 2 * z.real * z.imaginary + imaginary,
    };
  }
  return maxIterations;
}

function drawMandelbrot() {
  const realRange = 4.0;
  const imaginaryRange = 4.0;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const real = (x / (width - 1)) * realRange - (realRange / 2.0);
      const imaginary = (y / (height - 1)) * imaginaryRange - (imaginaryRange / 2.0);

      const iterations = mandelbrot(real, imaginary);
      const rect = two.makeRectangle(x, y, 1, 1);
      rect.fill = colors[iterations % colors.length];
    }
  }

  two.update();
}

function increaseIterations() {
  currentIterations *= 2;
  drawMandelbrot();
}

// Initial rendering with low iteration count
drawMandelbrot();

// Button to increase iteration count and refine the fractal
const increaseIterationsButton = document.createElement("button");
increaseIterationsButton.textContent = "Increase Detail";
increaseIterationsButton.addEventListener("click", increaseIterations);
document.body.appendChild(increaseIterationsButton);
