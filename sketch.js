const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon, cannonImg,cannonbaseImg,cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png"); 
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(0, height-1, width * 2, 1, options);
  World.add(world, ground);
  
  tower=Bodies.rectangle(160,350,160,310);
  World.add(world, tower);
  angleMode(RADIANS)
  var angle=-PI/4;
  cannon=new Cannon(180,110,130,100,angle);
  cannonBall=new CannonBall(cannon.x,cannon.y);
}

function draw(){
  image(backgroundImg,0,0,1200,600);
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width*2,1);
  
  // tower.display();
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x,tower.position.y,160,310);
  pop();   

  cannon.display();
  cannonBall.display();
}

  function keyPressed(){ 
   if(keyCode === DOWN_ARROW){
     cannonBall.shoot(); 
    }
  }
