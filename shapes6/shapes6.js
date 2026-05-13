function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255)
}


function draw() {
  fill(220,220,80);
  noStroke();
  circle(mouseX,mouseY,550);
}

function mousePressed(){
 background(random(100,155),random(0,100),random(100,255));
}
