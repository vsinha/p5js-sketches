let t, v;
function setup() {
  canvas = createCanvas(500, 500).canvas;
}
t = 0;
s = 0.01;
r = 300;

let prev;
function draw() {
  translate(width / 2, height / 2);
  background(220, 10);
  strokeWeight(1);
  for (let i = 0; i < 100; i += 0.01) {
    x = r * cos(i - t) * cos(i - t) - r / 2;
    y = r * sin(i + t) * cos(i + t);
    point(x, y);
    if (prev != null) {
      if (prev !== [0, 0] && x != 0 && y != 0) {
        // line(x, y, prev[0], prev[1]);
      }
    }
    prev = [x, y];
  }
  t += s;
}
