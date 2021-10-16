function setup() {
  createCanvas(500, 500);
}

t = 0;
r = 200;
function draw() {
  background(220, 5);
  strokeWeight(10);
  translate(width / 2, height / 2);
  for (i = 0; i < TAU; i += TAU / 6) {
    v = (t + i) * sin(frameCount / 200);
    line(r * cos(v), r * sin(v), r * cos(v + PI), r * sin(v + PI));
  }
  t += 0.01;
}
