var astro, alien, alien2, alien3;
var earth, moon, mars, saturn, solarsys;
var rocket, rocketlaunch;

var spaceFont;
var spaceFont2;
var lightFont;

var count = 0;
var startAgain = false;

var keyVal;

function preload() {

  //loading all images and fonts
  spaceFont = loadFont("data/moonhouse.ttf");
  spaceFont2 = loadFont("data/OCRAStd.otf");
  lightFont = loadFont("data/KozGoPr6N-ExtraLight.otf");

  astro = loadImage("data/Astro.png");
  alien = loadImage("data/Alieee.png");


  alien2 = loadImage("data/Alieee2.png");
  alien3 = loadImage("data/Alieee3.png");
  earth = loadImage("data/BackgroundEarth.png");
  moon = loadImage("data/BackgroundMoon.png");
  mars = loadImage("data/BackgroundMars.png");
  saturn = loadImage("data/BackgroundSaturn.png");
  solarsys = loadImage("data/System.png");
  rocket = loadImage("data/Rocket_Ship.png");
  rocketlaunch = loadImage("data/Rocket_ShipLaunched.png");


}

function setup() {
  createCanvas(1200, 800);
  frameRate(1);
  background(0);

  textSize(72);
  textFont(spaceFont);
  textAlign(CENTER);
  fill(255);
  text("Press SPACE to start!", width / 2, height / 2);

  textSize(22);
  textFont(spaceFont2);
  textAlign(RIGHT);
  fill(255);
  text("Get it? cuz outer-space haha", width - 10, height - 50);




}

function draw() {

  /*
  switch (input) {
    case 1:
      mars();

      break;
    case 2:

  }
  */

  if (keyIsPressed) {
    earthScene();

    textSize(16);
    textFont(spaceFont2);
    textAlign(CENTER);
    fill(0);
    text("Hello, I'm Astro Bob and I'm ready to travel!", width / 2, height / 2 - 125);
    textSize(12);
    text("(1) Travel     (2) Don't Travel", width / 2, height / 2 - 87.5);

    if (keyVal == 1) {
      earthTakeoff(400);
      for (var k = 400; k > -201; k--) {
        earthTakeoff(k);
      }
      solarSystem();
      switch (keyVal) {
    case 3:
      moon();
      if(keyVal == 8){
      break;
      }
    case 4:
      mars();
      if(keyVal == 8){
      break;
      }
    case 5:
      saturn();
      if(keyVal == 8){
      break;
      }

  }
    }

  }



}

function keyTyped() {
  if (key === 'a') {
    keyVal = 1;
  }
  if (key === 'b') {
    keyVal = 2;
  }
  if (key === '1') {
    keyVal = 3;
  }
  if (key === '2') {
    keyVal = 4;
  }
  if (key === '3') {
    keyVal = 5;
  }
  if (key === 8)
  {
    keyVal = 8;
  }
}



function gameOver() {
  background(0);

  textSize(72);
  textFont(spaceFont);
  textAlign(CENTER);
  fill(255);
  text("Game Over!", width / 2, height / 2);

  textSize(22);
  textFont(spaceFont2);
  textAlign(RIGHT);
  fill(255);
  text("Sucks doesn't it?", width - 10, height - 50);


}

function newGame() {

  textSize(72);
  textFont(spaceFont);
  textAlign(CENTER);
  fill(255);
  text("Press SPACE to start!", width / 2, height / 2);

  textSize(22);
  textFont(spaceFont2);
  textAlign(RIGHT);
  fill(255);
  text("Get it? cuz outer-space haha", width - 10, height - 50);

}


function earthScene() {
  background(0);
  image(earth, 0, 0, 1200, 800);
  image(rocket, 2.5 * width / 3, height / 2, 100, 200);
  image(astro, width / 2 - 100, height / 2 - 50, 200, 400);
}

function earthTakeoff(k) {
  background(0);

  image(rocketlaunch, width / 2, 0 + k, 200, 400);

  

}

function solarSystem() {
  image(solarsys, 0, 0, 1200, 800);
  
  textSize(44);
  textFont(spaceFont);
  textAlign(RIGHT);
  fill(255);
  text("1", width/2 + 32, height/2 - 70);
  text("2", width/2 + 175, height/2 + 120);
  text("3", width/2 + 450, height/2 + 180);
  
  
  
}

function moon(){
  image(moon,0,0,1200,800);
  image(rocket, 2.5 * width / 3, height / 2, 100, 200);
  image(astro, width / 2 + 200, height / 2 - 50, 200, 400);
  image(alien, width / 2 - 200, height / 2 - 50, 200, 400);
  
}

function mars(){
  image(mars,0,0,1200,800);
  image(rocket, 2.5 * width / 3, height / 2, 100, 200);
  image(astro, width / 2 + 200, height / 2 - 50, 200, 400);
  image(alien2, width / 2 - 200, height / 2 - 50, 200, 400);
}

function saturn(){
  image(saturn,0,0,1200,800);
  image(rocket, 2.5 * width / 3, height / 2, 100, 200);
  image(astro, width / 2 + 200, height / 2 - 50, 200, 400);
  image(alien3, width / 2 - 200, height / 2 - 50, 200, 400);
}