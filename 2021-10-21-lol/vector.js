// Helper functions for making vectors and whatnot

function vec(x, y) {
  return { x, y };
}

let dirs = [vec(0, 1), vec(0, -1), vec(-1, 0), vec(1, 0)];

function line_(a, b) {
  line(a.x, a.y, b.x, b.y);
}

function add(a, b) {
  if (typeof b === "number") {
    return { x: a.x + b, y: a.y + b };
  } else {
    return { x: a.x + b.x, y: a.y + b.y };
  }
}

function magnitude(vector) {
  mag(vector.x, vector.y);
}

function normalize(vector) {
  let m = magnitude(vector);
  return vec(vector.x / m, vector.y / m);
}

function mul(a, s) {
  return { x: a.x * s, y: a.y * s };
}
