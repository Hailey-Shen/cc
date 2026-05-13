function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
    background(0,50)
  fill(random(0,255));
  noStroke();
  circle(mouseX,mouseY,80);
}
