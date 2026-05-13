/**
 * Creative Coding 2026 — 3D Sketches: Part 1
 *
 * Welcome to 3D in p5.js! This sketch introduces ideas you need
 * to get started: a WEBGL canvas, lighting, 3D primitives, and
 * the push/pop transform system.
 *
 * In 2D we had a flat XY grid. In 3D there's a third axis, Z,
 * which points towards and away from you. Everything else — setup,
 * draw, fill, stroke — works exactly the same.
 */

function setup() {
  // The magic third argument, WEBGL, switches p5 into 3D mode.
  // Without it, box(), sphere() and lighting won't work.
  createCanvas(windowWidth, windowHeight, WEBGL); //<~~~~~~ WEBGL MODE ENABLED HERE
}

function draw() {
  background(15, 17, 26);

  // --- 1. LIGHTING ---
  // In 3D, shapes look flat unless you add light.
  // ambientLight() is a gentle fill-light that hits every surface equally —
  // think of it as the brightness of a cloudy day.
  ambientLight(80);

  // directionalLight() is like the sun: one colour, one direction.
  // The last three numbers are a direction vector (x, y, z).
  // -0.2, 0.5, -1 means: slightly left, slightly down, strongly towards us.
  directionalLight(0, 255, 255, -0.2, 0.5, -1);

  // --- 2. THE GROUND PLANE ---
  // A flat plane at ground level gives the eye a reference for space and depth.
  // Without it, floating objects are hard to read.
  push();
    // plane() is flat by default, lying in XY. We rotate it 90° around X
    // to lay it flat on the floor (the XZ plane).
    // Drop the floor below eye level so it is visible with the default camera.
    //translate(0, 120, 0);
    noStroke(); // No outline for the floor
    fill(155, 205, 255); // give the floor its colour
    plane(windowWidth,windowHeight); // width, height (both in pixels)
  pop();
  

  // --- 4. A SPHERE OFFSET IN DEPTH ---
  // The third argument of translate() is Z — depth.
  // A negative Z value pushes something away from you into the scene.
  // Notice how the sphere appears smaller than the box because of perspective.
  push();
    // translate(220, -20, 100); // Right, slightly up, and back into the scene
    // OPTIONAL ORBIT VERSION: comment out the line above and uncomment below.
    translate(cos(frameCount * 0.02) * 240, -20, sin(frameCount * 0.02) * 240);
    noStroke();
    fill(155, 150, 222);
    sphere(55); // A sphere — the one argument is the radius
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  // Press S to save a screenshot of the canvas
  if (key === 's') {
    saveCanvas('3d_01_core_forms', 'jpg');
  }
}
