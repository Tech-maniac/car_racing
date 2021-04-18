var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedLine=0;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var goldimg, silverimg,bronzeimg;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");

  gold_img = loadImage("images/gold.png");
  silver_img = loadImage("images/silver.png");
  bronze_img = loadImage("images/bronze.png");
  endimg=loadImage("images/endimg.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && finishedLine===0){
    game.update(1);
  }
  if(gameState === 1){

    game.play();
  }
  if (finishedLine === 4) {
    game.update(2);

  }
  console.log("finished line : "+finishedLine);
  
  if(gameState === 2 && finishedLine === 4)
  {
    game.end();
  }

}
