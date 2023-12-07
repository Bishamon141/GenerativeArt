import Two from "two.js";


// Setup Two.js scene
let params = {
  fullscreen: true
};
let elem = document.body;
let two = new Two(params).appendTo(elem);


// Setup scene
const radius = 150;
const centerX = 700;
const centerY = 450;
const maxInnerDepth = 8;


// Helper functions
const calculateIncircleRadius = (radius) => {
  return (radius * Math.sqrt(3)) / 2;
};

const calculatePointAtAngle = (centerX, centerY, angleInRadians, distance) => {
  const x = centerX + distance * Math.cos(angleInRadians);
  const y = centerY + distance * Math.sin(angleInRadians);
  return { x, y };
};

const calcOuterCenterPoints = (centerX, centerY, incircleRadius) => {
  const anglesInRadians = [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3];
  const points = [];
  for (const angle of anglesInRadians) {
    points.push(calculatePointAtAngle(centerX, centerY, angle, incircleRadius*2));
  }
  return points;
};

const calcInnerCenterPoints = (centerX, centerY, radius) => {
  const anglesInRadians = [
    4.71239,
    4.71239 + 2.0944,
    4.71239 + 2*2.0944
  ];
  const points = [];
  for (const angle of anglesInRadians) {
    points.push(calculatePointAtAngle(centerX, centerY, angle, radius / 2));
  }
  return points;
};


// Main functions
const drawDot = (x,y, color = 'red') => {
  const circle = two.makeCircle(x, y, 1);
  circle.stroke = color;
  circle.linewidth = 2;
}

const drawHexagon = (x,y,r, innerDepth = 0, createOuter = false) => {
  const incircleRadius = calculateIncircleRadius(r);
  const hex = two.makePolygon(x , y, r, 6);
  hex.fill = 'transparent';
  hex.stroke = 'white';
  hex.linewidth = .1;
  hex.rotation = Math.PI / 6;

  //drawDot(x,y);

  if (createOuter) {
    const centersOfAdjacentHexagons = calcOuterCenterPoints(x, y, incircleRadius);
    centersOfAdjacentHexagons.forEach((center, index) => {
      drawHexagon(center.x, center.y, radius, innerDepth=1);
      //drawDot(center.x, center.y);
    });
  }

  if (innerDepth < maxInnerDepth) {
    const innerCenterPoints = calcInnerCenterPoints(x,y,r)
    innerCenterPoints.forEach((center, index) => {
      drawHexagon(center.x, center.y, r/2, innerDepth+1);
      //drawDot(center.x, center.y, 'green');
    });
  }
}


// Draw center hexagonal
drawHexagon(centerX,centerY,radius,0, true );

// Render the scene
two.update();
