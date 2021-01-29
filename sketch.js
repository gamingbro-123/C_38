
var database;
var gameState=0;
var playerCount;
var allPlayers;
var car1,car2,car3,car4;
var carMain;


var form;
var game;
var player;

function setup(){
    createCanvas(windowWidth,windowHeight);  

    database = firebase.database();

    game = new Game();
    game.getState()
    game.start();

    


}

function draw(){
    background("white");

    if(playerCount === 4)
    {
        game.update(1)
    }

    if(gameState === 1)
    {
        clear();
        game.play();

    }
  

}

// function readData(DATA)
// {
//     var position = DATA.val();
    
// }


