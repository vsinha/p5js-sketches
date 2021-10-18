let rings = [];

let r = 100;
let s;
function setup() {
  canvas = createCanvas(800, 800).canvas;
  let n = 100;
  let w = 0;
  for (let m = 0.1; m < 3; m += 0.1 + m * m) {
    points = [];
    for (let i = 0; i < n; i++) {
      points.push(
        vec(
          m * r * cos((i * TAU) / n) + random(-w, w),
          m * r * sin((i * TAU) / n) + random(-w, w)
        )
      );
    }
    rings.push(points);
  }

  s = 0.05;
}
let t = 0;

function draw() {
  background(16, 58, 99, 20);
  // background(220);
  stroke(16, 58, 99, 50);
  strokeWeight(10);
  strokeCap(PROJECT);

  fill(220, 2);
  translate(width / 2, height / 2);
  let p = 10;
  rings.forEach((points) => {
    // for (let i = 0; i < points.length; i++) {
    //   let nx = 2 * cos(points[i].x + t);
    //   let ny = 2 * sin(points[i].x + t);
    //   let randvec = vec(nx, ny);
    //   points[i] = add(points[i], randvec);
    // }
    for (let i = 0; i < points.length; i++) {
      let nx = p * noise(points[i].x * s) - p / 2;
      let ny = p * noise(points[i].y * s) - p / 2;
      let randvec = vec(nx, ny);
      points[i] = add(points[i], randvec);
    }
    for (let i = 0; i < points.length; i++) {
      let wid = 100;
      push();
      strokeWeight(0);
      translate(points[i].x - wid / 2, points[i].y - wid / 2);
      square(0, 0, 100);
      pop();
    }

    for (let i = 0; i < points.length; i++) {
      line_(points[i], points[(i + 1) % points.length]);
    }
  });
  t += 0.01;
}
