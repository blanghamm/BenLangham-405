var img;
var r;
var l;
var button;


function preload() {
  let url = "https://api.spacexdata.com/v2/launches"
  spacex = loadJSON(url);
  img = loadImage("falcon9-render.png");
}
function setup() {
  var value = 0;
  var canvas = createCanvas(1280,720);
  canvas.parent("mysketch");
  console.log(spacex);
  }



function draw(){
  background(0);
{ // timeline code
  push();
    strokeWeight(2);
    stroke(255,255,255);
    line(50,50,1230,50);
    line(50,50,90,80);
    line(1230,50,1190,80);
    pop();
    textSize(11);
    fill(255,255,255);
    text("2016", 38,75);
    text("2018", 1218,75);
  }
for (var r = 25; r<52; r++){ //launch_main_image
  //console.log(r);
  fill("#babcc2");
  noStroke();
  var t = (r-25)*65;
  image(img, t+50, 400, img.width/20, img.height/20);
}

{ //launch_33


  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }

  textSize(15);
  text("Click on each rocket to bring up launch information",500,100);

  push();
  strokeWeight(2);
  if (mouseIsPressed) {
    stroke(255);
    line(60,230,60,375);
    line(60,230,90,230);
    line(90,230,90,190);
    line(90,230,90,260);
  } else {
    stroke(0);
  }
  pop();
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);

  }
  //print(mouseIsPressed);
  push();
  translate(50,0);
  textSize(11);
  text("Launch Date: "+spacex["32"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["32"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["32"].launch_success,50, 230);
  text("Rocket: "+spacex["32"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["32"].rocket.rocket_type, 50, 260);
  pop();
}
{ //launch_34

  push();
  translate(65,0);
  strokeWeight(2);
  if (mouseIsPressed) {
    stroke(255);
    line(60,230,60,375);
    line(60,230,90,230);
    line(90,230,90,190);
    line(90,230,90,260);
  } else {
    stroke(0);
  }
  pop();
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);

  }
  //print(mouseIsPressed);
  push();
  translate(115,0);
  textSize(11);
  text("Launch Date: "+spacex["33"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["33"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["33"].launch_success,50, 230);
  text("Rocket: "+spacex["33"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["33"].rocket.rocket_type, 50, 260);
  pop();
}
{ //launch_35

  push();
  translate(130,0);
  strokeWeight(2);
  if (mouseIsPressed) {
    stroke(255);
    line(60,230,60,375);
    line(60,230,90,230);
    line(90,230,90,190);
    line(90,230,90,260);
  } else {
    stroke(0);
  }
  pop();
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);

  }
  //print(mouseIsPressed);
  push();
  translate(180,0);
  textSize(11);
  text("Launch Date: "+spacex["34"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["34"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["34"].launch_success,50, 230);
  text("Rocket: "+spacex["34"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["34"].rocket.rocket_type, 50, 260);
  pop();
}






















}
