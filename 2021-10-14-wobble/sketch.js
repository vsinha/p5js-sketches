let points = [];
let bounds;

function normalize(vec) {
  let m = mag(vec[0], vec[1]);
  return [vec[0] / m, vec[1] / m];
}

function setup() {
  createCanvas(400, 400);

  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
    // normalize([1, 1]),
    // normalize([1, -1]),
    // normalize([-1, 1]),
    // normalize([-1, -1]),
  ];
  print(dirs);
  let start = [0, 0];
  let length = 20;
  points.push(start);
  for (let i = 1; i < 20; i++) {
    let prev = points[i - 1];
    let dir = random(dirs);
    let next = [prev[0] + dir[0] * length, prev[1] + dir[1] * length];

    points.push(next);
  }

  let min_x = Number.MAX_VALUE;
  let min_y = Number.MAX_VALUE;
  let max_x = Number.MIN_VALUE;
  let max_y = Number.MIN_VALUE;
  points.forEach((p) => {
    min_x = min(min_x, p[0]);
    min_y = min(min_y, p[1]);

    max_x = max(max_x, p[0]);
    max_y = max(max_y, p[1]);
  });
  bounds = {
    min: [min_x, min_y],
    max: [max_x, max_y],
  };
  print(bounds);
}

function draw() {
  background(220);

  // this doesn't do what i want it to do :(

  translate(width / 2, height / 2);
  let translate_x = (bounds.max[0] - bounds.min[0]) / 2;
  let translate_y = (bounds.max[1] - bounds.min[1]) / 2;
  print(translate_x, translate_y);
  // translate(translate_x, translate_y);

  stroke("black");
  strokeWeight(4);

  // for (let i = 0; i < points.length; i++) {
  //   let x = points[i][0];
  //   let y = points[i][1];
  //   let s = 0.02;
  //   let t = millis() / 1000;
  //   points[i][0] += noise(x * s, t, sin(t)) - 0.5;
  //   points[i][1] += noise(y * s, t, cos(t)) - 0.5;
  // }

  for (let i = 0; i < points.length - 1; i++) {
    let p0 = points[i];
    let p1 = points[i + 1];
    line(p0[0], p0[1], p1[0], p1[1]);
  }
  noLoop();
}
