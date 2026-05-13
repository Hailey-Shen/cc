function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
}


function draw() {
  square(mouseX,mouseY,50);
  fill(120,180,250);
  stroke(50,200,190);
  strokeWeight(3);
  if (mouseIsPressed){
    fill(255);}
}
