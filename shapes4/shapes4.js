function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
    background(0,10)
  fill(random(0,155),random(0,155),random(0,155));
  noStroke();
  circle(mouseX,mouseY,80);
}
