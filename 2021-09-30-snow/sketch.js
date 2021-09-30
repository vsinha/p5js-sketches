/* rows and columns are flipped lol */
let width = 450;
let height = 810;

let grid_rows = width / 5;
let grid_cols = height / 5;

let w = width / grid_rows;
let h = height / grid_cols;

let grid = new Array(grid_rows);
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(grid_cols);
  for (let j = 0; j < grid_cols; j++) grid[i][j] = 0;
}

function setup() {
  createCanvas(width, height);
  background(100, 113, 140);

  for (let i = 0; i < 500; i++) {
    let x = int(random(0, grid.length));
    let y = int(random(0, grid[0].length));
    grid[x][y] += int(random(200, 255));
  }
}

let s_orig = 500;

function draw() {
  background(100, 113, 140, 20);
  stroke(0, 0);

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let p = grid[r][c];
      // if (p > 0) {
      // fill(0, 0);
      // let neighbor = grid[r][c - 1] * 0.05;

      if (c < grid[0].length / 2 && random() < 0.0004) {
        grid[r][c] = 255;
      }

      // let topneighbor = grid[r][c - 1];
      // if (topneighbor && random() > 0.2) {
      //   grid[r][c] = topneighbor;
      // }

      if (random() < 0.2) {
        grid[r][c] = 0;
      }

      if (r > 0 && r < grid.length - 1) {
        let neighbor = grid[r - 1][c];
        if (random() < 0.002) {
          grid[r][c] = grid[r][c] + grid[r - 1][c] + grid[r + 1][c];
        }

        // if (
        //   grid[r - 1][c] > 0 &&
        //   grid[r + 1][c] > 0 &&
        //   grid[r][c - 1] > 0 &&
        //   random() < 0.6
        // ) {
        //   grid[r][c] = 0;
        // }

        if (
          grid[r - 1][c - 1] + grid[r + 1][c - 1] + grid[r][c - 1] > 400 &&
          random() > 0.00025
        ) {
          //       grid[r - 1][c - 1] = Vj
          // grid[r + 1][c - 1] = 0
          grid[r][c] = 255;
        }
      }

      if (grid[r][c] > 0) {
        fill(255, grid[r][c]);
        // rect(r * w, c * h, w, h, w / 2, h / 2);
        rect(r * w, c * h, w, h);
      }
      // }
    }
  }
  // background(1, 50);
  // fill(255, 0);
  // stroke(255, 20);
  // // stroke("grey");
  // translate(width / 2, height / 2);
  // // s = 100 + 100 * (1 + sin(millis() / 1000));
  // s = s_orig - 250;
  // n = 100;
  // for (let i = 0; i < n; i++) {
  //   push();
  //   rotate((PI / (1000 * n)) * i * (millis() / 10000));
  //   rect(-s / 2, -s / 2, s, s);
  //   pop();
  //   // push();
  //   // rotate(-1 * PI * i * sin(millis() / 10000));
  //   // rect(-s / 2, -s / 2, s, s);
  //   // pop();
  // }
  // push();
  // rotate(-(PI + millis() / 500) / 3.0);
  // rect(-s / 2, -s / 2, s, s);
  // pop();
  // square(25, 25, 25);
}
