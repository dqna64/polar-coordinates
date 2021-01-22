

DIS_HEIGHT = 720;
DIS_WIDTH = 1280;

let numPoints = 1720;
let r = 3;
let count;
let roff;
let goff;
let boff;

function setup() {
  createCanvas(DIS_WIDTH, DIS_HEIGHT);
  count = 1;
  roff = random(100);
  goff = random(100);
  boff = random(100);


}

function draw() {
  background(20);
  translate(DIS_WIDTH/2, DIS_HEIGHT/2);
  for (let i = 1; i <= numPoints; i++) {
    let length = i*0.4;
    let angle = i*noise(count * 5/10000);
    let x = cos(angle) * length;
    let y = sin(angle) * length;
    fill(55+200*noise(roff + count * 0.01), 55+200*noise(goff + count * 0.01), 55+200*noise(boff + count * 0.01));
    noStroke();
    circle(x, -y, 2 * r);
  }
  count ++;
}

loopBool = true;
function keyPressed() {
  if (key == " ") {
    if (loopBool) {
      noLoop();
      loopBool = !loopBool;
    } else {
      loop();
      loopBool = !loopBool;
    }
  }
}
