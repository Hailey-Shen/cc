function setup() {
  createCanvas(windowWidth,windowHeight);

}


function draw() {
    background(0,0,0,50)
  fill(120,180,250);
  stroke(50,200,190);
  strokeWeight(3);
  square(mouseX,mouseY,80);
}
