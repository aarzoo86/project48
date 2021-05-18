
var ghost_running,ghost,bg;
var sword,swordImage
var ground, invisibleGround, groundImage;
var gameOverImage;


function preload() {
  
  bg = loadImage("bg1.jpg")
  swordImage = loadImage("sword.png");
  gameOverImage = loadImage("gameover.png");
 
ghost_running = 
  loadAnimation("ghost1.png","ghost2.png","ghost3.png");
  groundImage = loadImage("ground2.png");
  
  

}

function setup(){
  
  createCanvas(500,450);
  
  //sword
  sword = createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale = 0.5;
  
ghost = createSprite(350,280,20,50);
ghost.addAnimation("ghost",ghost_running);
  
  ground = createSprite(200,300,400,10);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  
invisibleGround = createSprite(200,300,400,10);
  invisibleGround.visible = false;
  
  
  
}

function draw(){
  
 background(bg); 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    ghost.collide(invisibleGround);
  
  
    
   //to move sword along with mouse
    sword.y = World.mouseY;
    sword.x = World.mouseX;
  
  if(sword.isTouching(ghost)){
    
    ghost.scale = 0;
     
     sword.addImage(gameOverImage);
    gameOverImage.scale = 3;
    //to reposition sword
    sword.x = 200;
     sword.y = 200;
     }

drawSprites();  

}