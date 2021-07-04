var canvas, backgroundImage;

var gameState = 0;
var state=0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4, mans,man1,man2,man3,man4,jump,lost;

function preload(){
carImage1=loadImage("images/car1.png");
carImage2=loadImage("images/car2.png");
carImage3=loadImage("images/car3.png");
carImage4=loadImage("images/car4.png");
trackImage=loadImage("images/track.jpg");
groundImage=loadImage("images/ground.png");
manImage=loadAnimation("images/jake2.png","images/jake3.png","images/jake4.png","images/jake5.png");
manstanding=loadImage("image/jake1.png");
lostImage=loadImage("images/lost.png");
jumpImage=loadImage("images/jump.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1 && state == 0){
    clear();
    game.running();
  }
}
