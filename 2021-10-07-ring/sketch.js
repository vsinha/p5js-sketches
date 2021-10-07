let numPoints = 500;
let radius = 10;
let points = [];
let r1, r2, r3, r4;

function setup() {
  let seed = random() * 10000;
  // let seed = 4934.552939595292;
  print("seed: " + seed);
  randomSeed(seed);
  createCanvas(600, 600);

  for (let i = 0; i < numPoints; i++) {
    theta = (TAU * i) / numPoints;
    x = radius * cos(TAU * i);
    y = radius * sin(TAU * i);
    points.push({ radius, theta, x, y });
  }

  // t1 = (0 / 7) * TAU;
  // t2 = (3 / 7) * TAU;
  t1 = TAU / 2;
  t2 = 0;
}

let i = 0;
let max_i = 100;

function draw() {
  t1 += 0.01;
  t1 %= TAU;
  t2 += 0.02;
  t2 %= TAU;
  // t1 = -((1 / 4) * TAU + sin(millis() / 1000));
  // t2 = (3 / 4) * TAU + cos(millis() / 1000);
  background(220, 40);
  translate(width / 2, height / 2);

  let rings = [];
  let maxRadius = 200;

  // print(r1, r2);
  for (let r = 20; r < maxRadius; r += 20) {
    let ring = [];
    for (let i = 0; i < numPoints; i++) {
      let point = points[i];

      let rand = random(-1, 1);
      if (point.theta < t1 || point.theta > t2) {
        rand = 1;
        // continue;
      }
      let s = 4;
      // let rand = random(-1, 1);
      let radius = r + (sqrt(r) / 2) * rand;
      x = radius * cos(point.theta);
      y = radius * sin(point.theta);
      ring.push({ x, y });
    }
    rings.push(ring);
  }

  rings.forEach((ring) => {
    for (let i = 0; i < ring.length; i++) {
      p0 = ring[i];
      p1 = ring[(i + 1) % ring.length];
      line(p0.x, p0.y, p1.x, p1.y);
    }
  });

  // points.forEach((p) => {
  //   strokeWeight(3);
  //   point(p.x, p.y);
  // });
  // noLoop();
  i += 1;
  if (i > max_i) {
    // save("mySVG.svg"); // give file name
  }
}
