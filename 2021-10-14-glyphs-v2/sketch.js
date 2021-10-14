let grid_points = [];
let num_lines = 50;
let lines = [];
let circles = [];
let points = [];
let grid_num = 10;
let spacing = 20;

function setup() {
  createCanvas(400, 400);

  for (i = 0; i < grid_num; i++) {
    for (j = 0; j < grid_num; j++) {
      grid_points.push(vec(i, j));
    }
  }

  let r = vec(random(), random());
  for (let i = 0; i < num_lines; i++) {
    let p1 = random(grid_points);
    let d = random(dirs);
    let p2 = add(p1, d);
    let shadow = random() < 0.15;
    lines.push({ p1, p2, shadow });
  }

  for (let i = 0; i < 5; i++) {
    let c = random(grid_points);
    circles.push(c);
  }

  for (let i = 0; i < 10; i++) {
    let c = random(grid_points);
    points.push(c);
  }
}

function draw() {
  background(220);
  strokeWeight(4);
  fill(220);
  translate(100, 100);

  let s = spacing;
  lines.forEach(({ p1, p2, shadow }) => {
    line_(mul(p1, s), mul(p2, s));

    if (shadow) {
      push();
      strokeWeight(1);
      let shift = 0.25;
      line_(mul(add(p1, shift), s), mul(add(p2, shift), s));
      pop();
    }
  });

  circles.forEach((c) => {
    circle(c.x * s, c.y * s, s / 2);
  });

  points.forEach((c) => {
    point(c.x * s, c.y * s);
  });
}
