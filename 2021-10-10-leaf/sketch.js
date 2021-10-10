let leaves = [];
function setup() {
  createCanvas(400, 400);

  leaves.push(
    leaf({
      x: 0,
      y: 0,
      length: 100,
      rotation: 0,
    })
  );

  let make_leaf = (i, rotation, curvature) =>
    leaf({
      x: 0,
      y: i * 40 + i * 10,
      length: 80,
      rotation,
      curvature,
    });

  for (let i = 0; i < 3; i++) {
    let leaf = make_leaf(i, (1 / 4) * TAU, 1);
    leaves.push(leaf);
  }

  for (let i = 0; i < 3; i++) {
    let leaf = make_leaf(i, (3 / 4) * TAU, -1);
    leaves.push(leaf);
  }

  // for (let i = 0; i < 10; i++) {
  //   leaves.push(
  //     leaf({
  //       x: random(-width / 2, width),
  //       y: random(-height / 2, height),
  //       length: 100,
  //       rotation: TAU * random(),
  //     })
  //   );
  // }
}

function rotate_point(p, t) {
  let x = p.x;
  let y = p.y;
  return { x: x * cos(t) - y * sin(t), y: x * sin(t) + y * cos(t) };
}

function skew_point(p, t) {
  let x = p.x;
  let y = p.y;
  // return { x: x * cos(t) - y * sin(t), y: x * cos(t) + y * sin(t) };
  return { x: x, y: x * tan(t) + y };
}

function curve_point(p, c) {
  let x = p.x;
  let y = p.y;
  // return { x: x + (1 + abs(x)) * 2, y: y };
  return { x, y };
  let sign = x < 0 ? 1 : 0;
  // return { x: x + sign * c * 20 * sin((x * TAU) / 100), y: y };
}

function leaf({
  x,
  y,
  length,
  lobe_shallowness = 20,
  width_factor = 20,
  lobes = 6,
  rotation,
  curvature = 1,
}) {
  // sin(i * TAU) gives one period of a sine wave
  // sin(i * TAU * n) gives n periods
  // (+ TAU / 4) makes the sin wave end at x = 0
  let get_x = (i) =>
    (sin((i * TAU) / 2) * (sin(i * TAU * lobes + TAU / 4) * length)) /
      lobe_shallowness +
    width_factor * sin((i * TAU) / 2);

  let points = [];
  for (let i = 0; i < 1; i += 0.01) {
    let p = {
      x: get_x(i),
      y: -i * length,
    };

    p = curve_point(p, curvature);
    p = rotate_point(p, rotation);
    points.push(p);
  }

  for (let i = 1; i >= 0; i -= 0.01) {
    let p = {
      x: -1 * get_x(i),
      y: -i * length,
    };
    p = curve_point(p, -curvature);
    p = rotate_point(p, rotation);
    points.push(p);
  }

  let midrib = [];
  for (let i = 0; i < 1; i += 0.1) {
    let point = { x: 0, y: -i * length * 0.8 };
    point = curve_point(point, curvature);
    point = rotate_point(point, rotation);
    midrib.push(point);
  }

  return { x, y, points, midrib };
}

function draw() {
  background(220);

  stroke("black");
  strokeWeight(0.5);
  fill(80, 200, 90);

  translate(width / 2, height / 2);
  for (let n = 0; n < 4; n++) {
    push();
    // let theta = random() * TAU;
    // let theta = TAU / 5;
    // translate(width / 2, height / 2);
    // rotate(theta);
    let t = millis() / 1000 + 100;
    // let points = [p1, p2, p3, p4];

    // let points = [
    //   [0, 0],
    //   [10][(0, 100)],
    //   [0, 50],
    //   [25, 50],
    //   [25, 50],
    //   [75, 50],
    //   [100, 100],
    //   [100, 0],
    // ];

    leaves.forEach((leaf) => {
      push();
      translate(leaf.x, leaf.y);

      // draw the leaf
      beginShape();
      for (let i = 0; i <= leaf.points.length; i++) {
        let p = leaf.points[i % leaf.points.length];
        vertex(p.x, p.y);
      }
      endShape();

      // draw the midrib
      for (let i = 0; i < leaf.midrib.length - 1; i++) {
        let p0 = leaf.midrib[i];
        let p1 = leaf.midrib[i + 1];
        // line(p0.x, p0.y, p1.x, p1.y);
      }
      pop();
    });
  }
  // noLoop();
}
