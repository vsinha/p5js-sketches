let ps = [];
function setup() {
  createCanvas(500, 500, WEBGL);

  let m = 1000;
  for (let i = 0, len = 10000; i < len; i++) {
    ps.push({
      x: random(-m, m),
      y: random(-m, m),
      z: random(-m, m),
    });
  }
}

let t = 0.00001;
function draw() {
  background(220);
  // translate(width / 2, height / 2);
  orbitControl();

  // box(100, 100, 100, 0, 0, 0);
  for (let p of ps) {
    let x = p.x;
    let y = p.y;
    let z = p.z;
    p.x += t * y;
    p.y += t * (-x + y * z);
    p.z += t * (1.5 - y * y);

    point(p.x, p.y, p.z);
  }
}
