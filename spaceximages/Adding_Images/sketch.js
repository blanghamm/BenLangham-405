let amplitude = 200;
let xStep = 0.1;
let currentAngle = 0.0;
let angleSpeed = 0.5;
let pi = 3.14;
let angleStep = 2.0*pi / 512;

let img; //Variable to store the image

function setup(){
  createCanvas (852, 480);
  noFill();
  img = loadImage("screen.jpg"); //Load the image and assign to variable img
}

function draw(){
  image(img, 0, 0); //Draw the image on the screen
  drawFrequency();  //Function to draw the live frequency
}

//Function that draws a frequency on the screen
function drawFrequency(){
  stroke(120, 250, 90);
  strokeWeight(2);

  //Set amplitude settings - interaction with the mouse
  amplitude = map(mouseX, 0, width, 0, 210);
  amplitude = constrain(amplitude, 0, 210);

  //Frequency visualization
  let angle = currentAngle;
  let y = amplitude * sin(angle) + (height / 2);
  let x = 0;
  while(x <= width){
    angle += angleStep;
    let nextX = x + xStep;
    let nextY = amplitude * sin(angle) + (height / 2);
    line(x, y, nextX, nextY);
    x = nextX;
    y = nextY;
  }
  updateCurrentAngle();
}

function updateCurrentAngle(){
  currentAngle += angleSpeed;
  if(currentAngle >= 2 * pi){
    currentAngle -= 2 * pi;
  }
}
