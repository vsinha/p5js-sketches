let dirs = [vec(0, 1), vec(0, -1), vec(-1, 0), vec(1, 0)];

function vec(x, y) {
  return { x, y };
}

function line_(a, b) {
  line(a.x, a.y, b.x, b.y);
}

function add(a, b) {
  if (typeof b === "number") {
    return vec(a.x + b, a.y + b);
  } else {
    return vec(a.x + b.x, a.y + b.y);
  }
}

function normalize(vector) {
  let m = mag(vector.x, vector.y);
  return vec(vector.x / m, vector.y / m);
}

function mul(a, s) {
  return vec(a.x * s, a.y * s);
}
