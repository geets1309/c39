var database;
var form,player,game;
var gameState=0;
var playerCount;
var distance = 0;
var allPlayers;
var car1, car2, car3, car4;
var cars;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
 game=new Game();
 game.getState()
 game.start()
}

function draw(){
if(playerCount===4){
  game.update(1)
}
if (gameState===1){
  clear()
  game.play()
}

}

