var garden,rabbit,apple,orangeLeaf;
var gardenImg,rabbitImg,appleImg,orangeLeafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  //making the edges
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //controls
  rabbit.x = World.mouseX;

  //spawn apples
  createApples();

  //spawn orange leaves
  createLeaves();


  drawSprites();
}

function createApples() {
  if (frameCount % 80 === 0) {
    apple = createSprite(random(15,385),80);
    apple.velocityY = 8;
    apple.scale = 0.04
    apple.addImage(appleImg);
    apple.lifetime= 29;
 }
}

function createLeaves(){
  if (frameCount % 80 === 0) {
    orangeLeaf = createSprite(random(15,385),80);
    orangeLeaf.velocityY = 7;
    orangeLeaf.scale = 0.04
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.lifetime= 32;
 }
}