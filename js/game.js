class Game
{
    constructor()
    {
       
    }
  
    getState()
    {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data){
        gameState = data.val();
      });
    }
   update(state)
   {
     database.ref("/").update({gameState : state});
   }
  start()
  {
      if(gameState===0)
      {
          player = new Player();
          player.getCount();
         form = new Form();
         form.display();
         car1 = createSprite(100,200);
         car2 = createSprite(300,200);
         car3 = createSprite(500,200);
         car4 = createSprite(700,200);
         carMain = [car1,car2,car3,car4]

      }

  }

  play()
      {
        form.hideForm();
        
        
        Player.getPlayerInfo();
        var textYPosition = 130
        if(allPlayers!== undefined)
        {
          var index = 0;
          var carX = 0;
          var carY = 0;
          for(var slayer in allPlayers)
          {
            textSize(15);
            if(index ===  player.index-1)
            {
            carMain[index].shapeColor = "red"

            camera.position.y = carMain[index].y;
            
            }
           
            carX = carX + 200;
            carY = height - allPlayers[slayer].distance;

            carMain[index].x = carX;
            carMain[index].y = carY;
           
            // text(allPlayers[slayer].name + " : " + allPlayers[slayer].distance, 120,textYPosition);
            // textYPosition = textYPosition +20;
            index = index+1;
 
          }
        }

        if(keyIsDown(UP_ARROW)&& player.index!==null)
        {
          player.distance = player.distance+50;
          player.update();
         // player.distance +=50;
        }

        drawSprites();
      
      }

    
  
  
}