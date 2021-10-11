const directions = [
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
];

let points = [];

const spacing = 1;
let hue;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);

  background(0);

  hue = random(0, 255);
  let cols = 50;

  for (let i = 0; i < 200; i++) {
    let p = {
      p: {
        x: int(random(0, cols)) * (width / cols),
        y: int(random(0, cols)) * (height / cols),
      },
      dir: random(directions),
      c: random(0, 100),
    };
    points.push(p);
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    stroke(hue, p.c, 70);
    let p1 = {
      x: p.p.x + p.dir.x,
      y: p.p.y + p.dir.y,
    };
    let c = get(p1.x + p.dir.x * spacing, p1.y + p.dir.y * spacing);
    if (c[0] < 100) {
      point(p1.x, p1.y);
      p.p = p1;
    } else {
      p.dir = { x: -p.dir.y, y: p.dir.x };
    }
  }

  points.forEach(({ p, dir }) => {});
}
