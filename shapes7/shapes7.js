var x=0

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255)
}


function draw() {
  fill(120,120,180);
  noStroke();
  x=x+5
  circle(x,mouseY,50);
}

function mousePressed(){
 background(random(100,155),random(0,100),random(100,255));
}
