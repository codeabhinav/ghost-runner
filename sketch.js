var ghost, ghostImage;
var climber, climberImage, climbersGroup;
var door, doorImage, doorsGroup;
var tower, towerImage;
var  spookySound;
var invisibleblock, invisibleblockGroup;
var gameState="play"

function preload(){
  ghostImage=loadImage("ghost-jumping.png");
  climberImage=loadImage("climber.png");
  doorImage=loadImage("door.png");
  towerImage=loadImage("tower.png");
  spookySound=loadSound("spooky.wav");
}
function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
    spookySound.loop();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImage);
 ghost.scale=0.3
  
  doorsGroup=Group();
  invisibleblockGroup=Group();
  climbersGroup=Group();
}
function draw(){
  background(255);
 
  
  if(gameState==="play"){
    if(keyDown("left")){
    ghost.x=ghost.x-3
  }
  if(keyDown("space")){
     ghost.velocityY=-10    
  }
   ghost.velocityY=ghost.velocityY+0.8 
  
  if(keyDown("right")){
    ghost.x=ghost.x+3
  }
    
  if (tower.y>400){
    tower.y=300;    
  }
  }
  spawndoors();
  
  
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if (invisibleblockGroup.isTouching(ghost) || ghost.y>600){
    ghost.destroy();
      gameState = "end"
  }
     
  if (gameState === "end"){
     stroke("yellow");
     fill("yellow");
     textSize(30);
    text("Game Over", 230,250)
  }
    
    
   drawSprites();
}
function spawndoors(){
  
 if (frameCount%200===0){
 
 door=createSprite(200,50);
 climber=createSprite(200,90);
 invisibleblock=createSprite( 200,95);
   invisibleblock.width = climber.width;
 invisibleblock.height = 2;

  door.x = Math.round(random(200,500));
   climber.x=door.x
   invisibleblock.x=door.x
   
   door.addImage("door",doorImage);
   climber.addImage(climberImage);
   
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleblock.velocityY = 1;
    
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleblock.lifetime = 800;
   
    ghost.depth = door.depth;
    ghost.depth +=1;
    
   doorsGroup.add(door);
   climbersGroup.add(climber);
   invisibleblockGroup.add(invisibleblock);
   invisibleblock.debug = true;
   
 } 
  
  
  
  
}


