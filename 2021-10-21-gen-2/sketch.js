var loopFrame = 180;
var recorder;
var canvas;

let ps = [];
function setup() {
  createCanvas(500, 500);
  colorMode(HSL);

  for (let i = 0; i < 1000; i++) {
    ps.push({ r: random(0, 1), s: random(-0.6, 0.6), c: random(0, 255) });
  }
}

let t = 0;
let r = 200;
function draw() {
  background(0, 0.1);
  translate(width / 2, height / 2);
  strokeWeight(2);
  for (let i = 0; i < ps.length; i++) {
    stroke(ps[i].c, 70, 50);
    let ra = r * ps[i].r;
    let x = ra * cos(t + i);
    x = -r * sin(x / 20);
    let y = ra * sin(t + i) * cos(t + i) * ps[i].s;
    y = -r * cos(y / 20);
    point(x, y);
  }
  t += 0.002;
}
