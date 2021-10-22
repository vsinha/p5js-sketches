function setup() {
  createCanvas(500, 500);
}

function create_triangle(center_x, center_y, radius, angle) {
  let tri = [];
  for (let i = 0; i < 3; i++) {
    let theta = (TAU / 3) * i + angle;
    let x = center_x + radius * cos(theta);
    let y = center_y + radius * sin(theta);
    tri.push(vec(x, y));
  }
  return tri;
}

function draw_triangle(tri) {
  beginShape();
  for (let i = 0; i < tri.length; i++) {
    vertex(tri[i].x, tri[i].y);
  }
  endShape(CLOSE);
}

let t = 0;
function draw() {
  background(220, 10);
  fill(255, 50);
  translate(width / 2, height / 2);
  let tris = [];
  let n = 2;
  let r = 100;
  for (let i = 0; i < n; i++) {
    let x = r * cos(t * i);
    let y = r * sin(t * i);
    let tri = create_triangle(x, y, 100, i + t);
    draw_triangle(tri);
  }
  t += 0.01;
}
