let shapes = [];
let shape_table = [];
let replacement_table = [];

function setup() {
  createCanvas(500, 500);

  shape_table = {
    o: {
      type: "o",
      origin: vec(0, 0),
      layouts: [[vec(0, 0), vec(1, 0), vec(1, 1), vec(0, 1)]],
      rotation: 0,
    },
    i: {
      type: "i",
      origin: vec(0, 0),
      layouts: [
        [vec(0, 0), vec(1, 0), vec(2, 0), vec(3, 0)],
        [vec(0, 0), vec(0, 1), vec(0, 2), vec(0, 3)],
      ],
      rotation: 0,
    },

    l: {
      type: "l",
      origin: vec(0, 0),
      layouts: [
        [vec(0, 0), vec(1, 0), vec(2, 0), vec(2, 1)],
        [vec(0, 0), vec(0, 1), vec(0, 2), vec(1, 0)],
        [vec(0, 0), vec(1, 0), vec(2, 0), vec(2, -1)],
        [vec(0, 0), vec(0, 1), vec(0, 2), vec(1, -1)],
      ],
      rotation: 0,
    },

    j: {
      type: "j",
      origin: vec(0, 0),
      layouts: [
        [vec(0, 0), vec(1, 0), vec(2, 0), vec(2, 1)],
        [vec(0, 0), vec(0, 1), vec(0, 2), vec(1, 0)],
        [vec(0, 0), vec(1, 0), vec(2, 0), vec(2, -1)],
        [vec(0, 0), vec(0, 1), vec(0, 2), vec(-1, 0)],
      ],
      rotation: 0,
    },
    t: {
      type: "t",
      origin: vec(0, 0),
      layouts: [
        [vec(-1, 0), vec(0, 0), vec(1, 0), vec(0, 1)],
        [vec(0, -1), vec(0, 0), vec(0, 1), vec(-1, 0)],
        [vec(-1, 0), vec(0, 0), vec(1, 0), vec(0, -1)],
        [vec(0, -1), vec(0, 0), vec(0, 1), vec(1, 0)],
      ],
      rotation: 0,
    },
    s: {
      type: "s",
      origin: vec(0, 0),
      layouts: [
        [vec(0, 0), vec(-1, 0), vec(0, 1), vec(1, 1)],
        [vec(0, 0), vec(-1, 0), vec(0, -1), vec(-1, 1)],
      ],
      rotation: 0,
    },

    z: {
      type: "z",
      origin: vec(0, 0),
      layouts: [
        [vec(0, 0), vec(1, 0), vec(0, 1), vec(-1, 1)],
        [vec(0, 0), vec(1, 0), vec(0, -1), vec(1, 1)],
      ],
      rotation: 0,
    },
  };

  replacement_table = {
    o: [
      {
        type: "l",
        rotation: 0,
        origin: vec(0, 0),
        scale: 0.5,
      },
    ],
  };
  // generate the starting shape

  shapes.push({
    type: "o",
    rotation: 0,
    origin: vec(-2, 0),
    scale: 1,
  });

  shapes.push({
    type: "l",
    rotation: 0,
    origin: vec(4, 0),
    scale: 1,
  });

  shapes.push({
    type: "j",
    rotation: 0,
    origin: vec(4, -4),
    scale: 1,
  });

  shapes.push({
    type: "t",
    rotation: 0,
    origin: vec(8, 2),
    scale: 1,
  });

  shapes.push({
    type: "s",
    rotation: 0,
    origin: vec(0, 10),
    scale: 1,
  });

  shapes.push({
    type: "z",
    rotation: 0,
    origin: vec(-5, 10),
    scale: 1,
  });

  // do substitution iterations
  // expand
  // replace
  iterate(shapes);

  // draw
}

function iterate(shapes) {
  for (let s = 0; s < shapes.length; s++) {
    shapes[s].scale *= 10;
  }
}

function replace(shape) {
  let scale = shape.scale / 2;
  let replacements = [];

  return replacements;
}

function draw_shape(shape) {
  template = shape_table[shape.type];
  points = template.layouts[shape.rotation];
  for (let i = 0; i < points.length; i++) {
    push();
    if (points[i].x == 0 && points[i].y == 0) {
      fill(220);
    }
    let x = (shape.origin.x + points[i].x) * shape.scale;
    let y = (shape.origin.y + points[i].y) * shape.scale;

    square(x, y, shape.scale);
    pop();
  }
}

function draw() {
  background(220);

  strokeWeight(1);
  translate(width / 2, height / 2);

  shapes.forEach((shape) => {
    draw_shape(shape);
  });
}

function mouseClicked() {
  shapes.forEach((shape) => {
    shape.rotation += 1;
    shape.rotation %= shape_table[shape.type].layouts.length;
  });
}
