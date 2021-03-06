class Form{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h4');
        this.title = createElement('h3');
        this.reset = createButton('reset');
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
    
      display(){
          this.title.html("International Racing Game");
          this.input.position(displayWidth/2 - 20,displayHeight/2 -35);
          this.title.position(displayWidth/2 - 40 , displayHeight/2 - 100);
          this.button.position(displayWidth/2 + 30, displayHeight/2);
          this.reset.position(50,100);
          this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            Player.writerank(0);
          })
            this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          });
      
        }
      }