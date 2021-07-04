class Game {
    constructor(){
  
    }
  
    running(){
      form.hide();
  
      image(trackImage,0,-9*displayHeight,displayWidth,10*displayHeight);
      
      player.readrank();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 200;
        var y;
  
        for(var plr in allPlayers){
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight*3/4 - allPlayers[plr].distance;
          mans[index-1].x = x;
          mans[index-1].y = y;
  
          if (index === player.index){
            if(keyDown(LEFT_ARROW)){
              mans[index-1].x-=25;
            }
      
            if(keyDown(RIGHT_ARROW)){
              mans[index-1].x+=25;
            }
      
            mans[index - 1].shapeColor = "red";
            textSize(25);
            
            text("you",x,y);
            camera.position.x = displayWidth/2;
            camera.position.y = mans[index-1].y
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
    
  
      
      if(keyIsDown(UP_ARROW) && player.index !== null){
        changeAnimation("running",manImage);
        player.distance +=10
        player.update();
      }

      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }

      
      
      if(player.distance>8350){
         gameState=2;
         this.update(2);
         alert("game over");
         player.rank++;
         Player.writerank(player.rank);
         alert(player.rank);
      }
  
      drawSprites();
    }
  }

    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      /*car1 = createSprite(100,200);
      car1.addImage(carImage1);
      car2 = createSprite(300,200);
      car2.addImage(carImage2);
      car3 = createSprite(500,200);
      car3.addImage(carImage3);
      car4 = createSprite(700,200);
      car4.addImage(carImage4);
      cars = [car1, car2, car3, car4];*/
      man1=createSprite(100,200);
      man1.addAnimation("player",manstanding);
      man2 = createSprite(300,200);
      man2.addAnimation("player",manstanding);
      man3 = createSprite(500,200);
      man3.addAnimation("player",manstanding);
      man4 = createSprite(700,200);
      man4.addAnimation("player",manstanding);
      mans = [man1, man2, man3, man4];

    }
  
    play(){
      form.hide();
  
      image(trackImage,0,-9*displayHeight,displayWidth,10*displayHeight);
      
      player.readrank();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 200;
        var y;
  
        for(var plr in allPlayers){
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight*3/4 - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            textSize(25);
            
            text("you",x,y);
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      
      if(player.distance>8350){
         gameState=2;
         this.update(2);
         alert("game over");
         player.rank++;
         Player.writerank(player.rank);
         alert(player.rank);
      }
  
      drawSprites();
  }
}
