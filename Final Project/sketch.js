var img; //these are the variables
var r;
var l;


function preload() { //Preload function allows me to load data and images before the sketch begins
  let url = "https://api.spacexdata.com/v2/launches" //SpaceX api allows me to display their data
  spacex = loadJSON(url);
  img = loadImage("falcon9-render.png"); //This is used to preload the images that have been used in the sketch
}
function setup() {
  var value = 0;
  var canvas = createCanvas(1280,720);// Creates the correct canvas size
  canvas.parent("mysketch");// Creates a container that can be used in html to position it
  console.log(spacex); // logs the spaceX array making it possible to find the correct information to display
  }
function draw(){
  background(0);
{ // timeline code
  push(); // This entire section draws the timeline at the top of the screen, displaying the text at each end of the timeline
    strokeWeight(2);
    stroke(255,255,255);
    line(50,50,1230,50);
    line(50,50,90,80);
    line(1230,50,1190,80);
    pop();
    textSize(11);
    fill(255,255,255);
    text("2016", 38,75);
    text("2017", 1218,75);
    textSize(15);
    text("Hover your mouse over each rocket to reveal information about it's launch", 400,100);
  }
for (var r = 25; r<52; r++){ //launch_main_image
  //console.log(r);
  fill("#babcc2");
  noStroke();
  var t = (r-25)*190; // Using a variable here allowed me to increase the spacing of the rockets without having to insert multiple images.
  image(img, t+50, 400, img.width/20, img.height/20); //Using a for loop to copy the image across the screen multiple times wihtout loading the image multiple times
}
{ //launch_33

  if (round(mouseX) >= 50 && round(mouseX) <= 75 && round(mouseY) >= 400 && round(mouseY) <= 690) { //This line of code would determine where the mouse was and would reveal data attached to it.
    console.log("mouseover");
    strokeWeight(2);
      stroke(255);
      line(60,130,60,375);
      line(60,130,90,130);
      line(90,130,90,170);
      line(90,130,90,100);
      stroke(0);
    fill(255);
  } else {
    fill(0);
  }
  push();
  translate(50,0);
  textSize(11);
  text("Launch Date: "+spacex["32"].launch_date_utc, 50, 110); //Changing the number would change the information that was displayed regarding the launch data
  text("Launch Site: "+spacex["32"].launch_site.site_name,50, 125); //In every launch block the number would go up to represent the correct information
  text("Launch Success: "+spacex["32"].launch_success,50, 140);
  text("Rocket: "+spacex["32"].rocket.rocket_name, 50, 155);
  text("Rocket Type: "+spacex["32"].rocket.rocket_type, 50, 170);
  pop();
} // All of these launch blocks contain an if statement that would correspond to the correct rocket image from left to right.

{ //launch_34
  if (round(mouseX) >= 240 && round(mouseX) <= 260 && round(mouseY) >= 400 && round(mouseY) <= 690) {
    console.log("mouseover");
    push();
    translate(190,0);
    strokeWeight(2);
      stroke(255);
      line(60,230,60,375);
      line(60,230,90,230);
      line(90,230,90,190);
      line(90,230,90,260);
      stroke(0);
    pop();

    fill(255);
  } else {
    fill(0);
  }

  push();
  translate(240,0);
  textSize(11);
  text("Launch Date: "+spacex["33"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["33"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["33"].launch_success,50, 230);
  text("Rocket: "+spacex["33"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["33"].rocket.rocket_type, 50, 260);
  pop();
}

{ //launch_35
  if (round(mouseX) >= 430 && round(mouseX) <= 450 && round(mouseY) >= 400 && round(mouseY) <= 690) {
    console.log("mouseover");
    push();
    translate(380,0);
    strokeWeight(2);
      stroke(255);
      line(60,230,60,375);
      line(60,230,90,230);
      line(90,230,90,190);
      line(90,230,90,260);
      stroke(0);
    pop();

    fill(255);
  } else {
    fill(0);
  }

  push();
  translate(430,0);
  textSize(11);
  text("Launch Date: "+spacex["34"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["34"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["34"].launch_success,50, 230);
  text("Rocket: "+spacex["34"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["34"].rocket.rocket_type, 50, 260);
  pop();
}

{ //launch_36
  if (round(mouseX) >= 620 && round(mouseX) <= 640 && round(mouseY) >= 400 && round(mouseY) <= 690) {
    console.log("mouseover");
    push();
    translate(570,0);
    strokeWeight(2);
      stroke(255);
      line(60,230,60,375);
      line(60,230,90,230);
      line(90,230,90,190);
      line(90,230,90,260);
      stroke(0);
    pop();

    fill(255);
  } else {
    fill(0);
  }

  push();
  translate(620,0);
  textSize(11);
  text("Launch Date: "+spacex["35"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["35"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["35"].launch_success,50, 230);
  text("Rocket: "+spacex["35"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["35"].rocket.rocket_type, 50, 260);
  pop();
}

{ //launch_37
  if (round(mouseX) >= 810 && round(mouseX) <= 830 && round(mouseY) >= 400 && round(mouseY) <= 690) {
    console.log("mouseover");
    push();
    translate(760,0);
    strokeWeight(2);
      stroke(255);
      line(60,230,60,375);
      line(60,230,90,230);
      line(90,230,90,190);
      line(90,230,90,260);
      stroke(0);
    pop();

    fill(255);
  } else {
    fill(0);
  }

  push();
  translate(810,0);
  textSize(11);
  text("Launch Date: "+spacex["36"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["36"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["36"].launch_success,50, 230);
  text("Rocket: "+spacex["36"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["36"].rocket.rocket_type, 50, 260);
  pop();
}

{ //launch_38
  if (round(mouseX) >= 1000 && round(mouseX) <= 1020 && round(mouseY) >= 400 && round(mouseY) <= 690) {
    console.log("mouseover");
    push();
    translate(950,0);
    strokeWeight(2);
      stroke(255);
      line(60,230,60,375);
      line(60,230,90,230);
      line(90,230,90,190);
      line(90,230,90,260);
      stroke(0);
    pop();

    fill(255);
  } else {
    fill(0);
  }

  push();
  translate(1000,0);
  textSize(11);
  text("Launch Date: "+spacex["36"].launch_date_utc, 50, 200);
  text("Launch Site: "+spacex["36"].launch_site.site_name,50, 215);
  text("Launch Success: "+spacex["36"].launch_success,50, 230);
  text("Rocket: "+spacex["36"].rocket.rocket_name, 50, 245);
  text("Rocket Type: "+spacex["36"].rocket.rocket_type, 50, 260);
  pop();
}

}
