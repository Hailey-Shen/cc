
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
}


function draw() {
  fill(220,210,random(180));
  noStroke();
  circle(width/2,height/2,300);
  
  fill(220,random(210),random(180));
  noStroke();
  circle(random(width),random(height),30);
}
