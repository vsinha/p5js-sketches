let width = 450;
let height = 810;

let rows = Math.floor(height / 15);
let cols = Math.floor(width / 15);

let w = width / cols;
let h = height / rows;

let spacing = 4;

let grid = new Array(rows);
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(cols);
  for (let j = 0; j < cols; j++) grid[i][j] = 0;
}
/*

[
  [1, 0, 0]
  [2, 1, 0] -> [X, X, _]
  [0, 2, 0]
  [0, 3, 0] -> [_, X, X]
               [_, X, X]

  [0, 3, 0, 0] -> [_, X, X, 0]
  [0, 0, 2, 0] -> [_, X, X, ]
                  [_, X, X]
]

rules:
for each pos in the grid
if 0 draw nothing
if 1, draw a 1x1 square
if 2, draw a 1x2 rect

*/

function init_grid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (random() < 0.9) {
        grid[i][j] = 1;
      }
      if (random() < 0.04) {
        grid[i][j] = 2;
      }
    }
  }
}

function clean_grid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let within_block_2_width = i > 0 && grid[i - 1][j] == 1;
      let above_is_also_block_start = j > 0 && grid[i][j - 1] == 1;
      let even_and_start = i == 0 && j % 2 == 0;
      if (above_is_also_block_start || even_and_start || within_block_2_width) {
        grid[i][j] = 0;
      }
    }
  }
}

let brick_palette = [
  [16, 65, 58],
  [11, 84, 23],
  [8, 52, 36],
];

function draw_grid() {
  fill(255);
  noStroke();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      push();
      let color = random(brick_palette);
      fill(...color);
      if (grid[i][j] == 1) {
        rect(i * w, j * h, (w - spacing) * 2, w - spacing);
        // } else if (grid[i][j] == 2) {
        //   push();
        //   // fill("green");
        //   rect(i * w, j * h, w * 2 - spacing, w * 2 - spacing);
        //   pop();
      } else {
        square(i * w, j * h, w - spacing);
      }
      pop();
    }
  }
}

let plants = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  init_grid();
  clean_grid();
  print(grid);
  background(0);
  draw_grid();

  for (let i = 0; i < 5; i++) {
    plants.push(
      plant({
        color: color(120, 100, 50),
        rate: 7,
        uprate: 0.1,
        radius: 4,
        spread: 3,
      })
    );
  }

  for (let i = 0; i < 5; i++) {
    plants.push(
      plant({
        color: color(101, 95, 29),
        rate: 1,
        uprate: 0.8,
        radius: 2,
        spread: 1,
      })
    );
  }
}

let plant = ({ rate, uprate, color, radius, spread }) => {
  let plantx = 180;
  let planty = 390;
  return () => {
    push();
    fill(color);
    circle(plantx, planty, radius);
    pop();

    plantx += rate * random(-1, 1) * spread;
    planty += rate * (random(-1, 1) - uprate);
  };
};

function draw() {
  plants.forEach((plant) => {
    plant();
  });
}
