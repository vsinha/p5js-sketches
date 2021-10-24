let polygons = [];

function pre_push(points, { push_out_distance }) {
  let new_points = [];
  let angle = 0;
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i];
    let p2 = points[(i + 1) % points.length];
    let midpoint = add(p1, mul(sub(p2, p1), 0.5));
    let perpendicular = rotate_angle(normalize(midpoint), angle);
    let new_midpoint = add(midpoint, mul(perpendicular, push_out_distance));
    new_points.push(p1);
    new_points.push(new_midpoint);
    // new_points.push(p2);
    // print(p1, new_midpoint, p2);
  }
  return new_points;
}

function setup() {
  createCanvas(500, 500);
  let radius = 100;
  let n = 10;
  let points = [];
  for (let i = 0; i < n; i++) {
    let x = radius * cos((i * TAU) / n);
    let y = radius * sin((i * TAU) / n);
    points.push({ x, y });
  }

  // find the midpoint and push it outwards
  // repeat this process pre_push_iters times
  let pre_push_iters = 1;
  // for (let i = 0; i < pre_push_iters; i++) {
  //   points = pre_push(points);
  // }
  points = pre_push(points, { push_out_distance: 20 });
  // points = pre_push(points, { push_out_distance: 10 });
  polygons.push(points);

  // points = pre_push(points);
  // polygons.push(points);

  // // then duplicate this shape N times
  // for (let i = 0; i < 5; i++) {
  //   polygons.push([...points]);
  // }
  // print(polygons.length);

  // for (let i = 0; i < polygons.length; i++) {
  //   polygons[i] = pre_push(polygons[i]);
  // }
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  strokeWeight(1);
  fill(255, 70);
  // noStroke();
  polygons.forEach((points) => {
    beginShape();
    for (let i = 0; i < points.length; i++) {
      let p1 = points[i];
      push();
      strokeWeight(5);
      point(p1.x, p1.y);
      pop();
      vertex(p1.x, p1.y);
    }
    endShape(CLOSE);
  });
}
