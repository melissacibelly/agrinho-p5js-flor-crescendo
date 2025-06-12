let plantHeight = 0;
let maxPlantHeight = 160;
let growthSpeed = 0.6;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  drawSky();
  drawSun();
  drawClouds();
  drawGround();
  growPlant();
}

function drawSky() {
  background(135, 206, 250); // céu {
}

function drawSun() {
  noStroke();
  fill(255, 223, 0);
  ellipse(60, 60, 80, 80);
}

function drawClouds() {
  fill(255);
  noStroke();
  ellipse(250, 80, 60, 40);
  ellipse(275, 80, 60, 40);
  ellipse(260, 65, 60, 40);
}

function drawGround() {
  noStroke();
  fill(139, 69, 19); // terra
  rect(0, height - 80, width, 80);

  // cor da terra
  for (let i = 0; i < width; i += 10) {
    fill(120, 60, 10, 40);
    ellipse(i, random(height - 10, height - 80), 5, 5);
  }
}

function growPlant() {
  if (plantHeight < maxPlantHeight) {
    plantHeight += growthSpeed;
  }

  let baseX = width / 2;
  let baseY = height - 80;

  //  caule
  stroke(34, 139, 34);
  strokeWeight(4);
  line(baseX, baseY, baseX, baseY - plantHeight);

  //  folhas
  noStroke();
  fill(34, 139, 34);
  for (let i = 20; i < plantHeight - 10; i += 30) {
    ellipse(baseX - 10, baseY - i, 15, 8);
    ellipse(baseX + 10, baseY - i - 15, 15, 8);
  }

  // flor
  if (plantHeight >= maxPlantHeight) {
    let flowerY = baseY - plantHeight;
    fill(255, 100, 150);
    for (let a = 0; a < TWO_PI; a += PI / 4) {
      let x = cos(a) * 10;
      let y = sin(a) * 10;
      ellipse(baseX + x, flowerY + y, 10, 10);
    }
    fill(255, 255, 0);
    ellipse(baseX, flowerY, 10, 10);
  }
}
