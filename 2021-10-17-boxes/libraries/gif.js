let is_recording = false;

capturer = new CCapture({
  framerate: 60,
  format: "gif",
  workersPath: "./libraries/",
  verbose: false,
});

function gif_start_recording() {
  console.log("Starting gif capture");
  first_frame = frameCount;
  capturer.start();
  is_recording = true;
}

function gif_stop_recording() {
  console.log("Ending gif capture");
  is_recording = false;
  capturer.stop();
  capturer.save();
}

function gif_toggle_recording() {
  if (is_recording) {
    gif_stop_recording();
  } else {
    gif_start_recording();
  }
}

function gif_add_frame(canvas) {
  if (is_recording) {
    capturer.capture(canvas);
  }
}
