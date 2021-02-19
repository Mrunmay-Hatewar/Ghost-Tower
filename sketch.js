var Gamestate=1;
function preload(){
  Climberimg=loadImage('climber.png')
  Doorimg=loadImage('door.png')
  Towerimg=loadImage('tower.png')
  Ghostimg=loadImage('ghost-standing.png')
  GameOverimg=loadImage('girl-game-over-glasses-p6.jpg')
  Restartimg=loadImage('Restart.jpg')
  Sound=loadSound('spooky.wav')
  LolSound=loadSound("My Audio.mp3")
  SpookySound=loadSound("2019-06-18_-_Creepy_Vibes_-_David_Fesliyan.mp3")
}
function setup(){
  createCanvas(600,600)
  Tower=createSprite(300,300)
  Tower.addImage(Towerimg)
  Ghost=createSprite(300,300)
  Ghost.addImage(Ghostimg)
  Ghost.scale=0.4
   gameover=createSprite(300,300,1,1);
  gameover.addImage(GameOverimg);
  gameover.scale=0.15;
   restart=createSprite(300,525,1,1);
  restart.addImage(Restartimg);
 restart.scale=0.25;
  DoorG=createGroup()
    ClimberG=createGroup()
BlockG=createGroup()
}
function draw(){
  if(Gamestate===1){
    SpookySound.play()
  if(keyDown("space")){
    Ghost.velocityY=-10 
     }
  Ghost.velocityX=0
  if(keyDown("left")){
    Ghost.velocityX=-10 
     }
  if(keyDown("right")){
    Ghost.velocityX=10 
     }
Ghost.velocityY=Ghost.velocityY+0.8 
  Tower.velocityY=2
  if(Tower.y>600){
    Tower.y=0
  }
  doors()
  Ghost.collide(ClimberG)
    if(Ghost.isTouching(BlockG)||Ghost.y>600){
      LolSound.play()
      Gamestate=0    }
    gameover.visible=false
    restart.visible=false
  }
  if(Gamestate===0){
    background('Yellow')
    Ghost.visible=false
    Tower.visible=false
    DoorG.destroyEach()
    ClimberG.destroyEach()
    BlockG.destroyEach()
     gameover.visible=true
    restart.visible=true
    SpookySound.stop()
    
    if(mousePressedOver(restart)){
      Gamestate=1
      Ghost.visible=true
      Tower.visible=true
       Ghost.x=200
    Ghost.y=200
    }
  }
  drawSprites()
}
function doors(){
  if(frameCount%150===0){
     Door=createSprite(random(50,350),0)
    Door.velocityY=2
    Door.addImage(Doorimg)
       Climber=createSprite(Door.x,60)
    Climber.velocityY=2
    Climber.addImage(Climberimg)
    Ghost.depth=Door.depth+1
    DoorG.add(Door)
    ClimberG.add(Climber)
   Block=createSprite(Door.x,70,40,10)
   Block.velocityY=2
    BlockG.add(Block)
     }
}
