var canvas;

const width = window.innerWidth;
const height = window.innerHeight;
function setup() {
  canvas = createCanvas(width, height);
  canvas.style('z-index','-1');
}

let t = 0;
const opacity = 40;

function draw() {
  background(45);
  noStroke()
  t += 0.01;
  for(let i = -100; i <= width; i += 100){
    for(let j = -100; j <= height; j += 174){
      fill(255, noise(i, j, t) * 255, noise(j, i, t) * 255, noise(t, i, j) * opacity);
      triangle(0 + i, 0 + j, 50 + i, 87 + j, 100 + i, 0 + j);
      
      fill(255, noise(i, t, j) * 255, noise(i, j, t) * 255, noise(t, j, i) * opacity);
      triangle(50 + i, 87 + j, 100 + i, 0 + j, 150 + i, 87 + j);
      
      fill(255, noise(j, i, t) * 255, noise(j, t, i) * 255, noise(i, t, j) * opacity);
      triangle(50 + i, 87 + j, 100 + i, 174 + j, 150 + i, 87 + j);
      
      fill(255, noise(j, t, i) * 255, noise(t, i, j) * 255, noise(t, j, i) * opacity);
      triangle(100 + i, 174 + j, 150 + i, 87 + j, 200 + i, 174 + j);
    }
  }
}