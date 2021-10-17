function setup() {
  createCanvas(500, 500);
}

let w = 20;
let t = 0;
let r = 100;
let n = 10;
let o = 0;

function draw() {
  background(220);
  noStroke();
  fill(0);
  translate(width / 2, height / 2);
  for (v = -n / 2; v < n / 2; v++) {
    for (let i = -n / 2; i < n / 2; i++) {
      // fade a circle into a line
      fill(40 * v * sin(t));
      let x =
        10 * v +
        (1 - o) * (cos(-t * 2 + PI) * i * (w + 2)) +
        o * r * -1 * sin(t + (i * TAU) / n);
      let y =
        n * 2 * v * sin(t) +
        (1 - o) * (sin(t * 2 + PI) * i * (w + 2)) +
        o * (r * cos(t + (i * TAU) / n));
      circle(x, y, w);
    }
  }
  t += 0.01;
  o = sin(t) * 0.5 + 0.5;
}
