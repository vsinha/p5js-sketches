var loopFrame = 180;
var recorder;
var canvas;

let ps = [];
function setup() {
  // recorder = new P5Recorder({ gifLength: 100 });
  createCanvas(500, 500);
  colorMode(HSL);

  for (let i = 0; i < 1000; i++) {
    ps.push({ r: random(0, 1), s: random(-0.1, 0.1), c: random(0, 255) });
  }
}

let t = 0;
let r = 100;
function draw() {
  background(0, 0.1);
  translate(width / 2, height / 2);
  strokeWeight(2);
  for (let i = 0; i < ps.length; i++) {
    stroke(ps[i].c, 70, 50);
    let ra = r * ps[i].r + 100;
    let x = ra * cos(t + i);
    let y = ra * sin(t + i) * cos(t + i) * (ps[i].s + 1);
    point(x, y);
  }
  t += 0.005;

  // recorder.capture(frameCount);
}
