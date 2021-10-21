var loopFrame = 180;
var recorder;
var canvas;

let ps = [];
let o, f, g;
function setup() {
  // recorder = new P5Recorder({ gifLength: 100 });
  createCanvas(700, 700);
  colorMode(HSL);

  o = int(random(0, 5));
  print(o);
  for (let i = 0; i < 2000; i++) {
    let c = random(0, 255);
    ps.push({ r: random(0, 1), c });
  }
  f = sin;
  g = cos;
  if (random() > 0.5) {
    print("f = cos");
    // f = cos;
  }

  if (random() > 0.5) {
    print("g = sin");
    // g = sin;
  }
}

let t = 0;
let r = 70;
function draw() {
  if (frameCount <= 1) background(0);
  background(0, 0.05);
  translate(width / 2, height / 2);
  noStroke();
  for (let i = 0; i < ps.length; i++) {
    fill(ps[i].c, 70, 80);
    let theta = t + (i * PI) / 4;
    let ra = r * ps[i].r + 100;
    let x = ra * (g(theta) + g(theta * o) + f(millis() / 1000));
    let y = ra * (f(theta) + g(theta * o));
    circle(x, y, 20);
  }
  t += 0.02;

  // recorder.capture(frameCount);
}
