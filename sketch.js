
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var crumpledpaper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var option={
  isStatic:true
  }
  ground=Bodies.rectangle(400,690,800,10,option);
  World.add(world,ground);
  
  dustbin1 = new Dustbin(620,680,200,20);
  World.add(world,dustbin1);
  dustbin2 = new Dustbin(530,585,20,170);
  World.add(world,dustbin2);
  dustbin3 = new Dustbin(710,585,20,170);
  World.add(world,dustbin3);

  crumpledpaper = new Ball(50,650,20,20);
  World.add(world,crumpledpaper);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  crumpledpaper.display();

  keypressed();
  
  drawSprites();
}
function keypressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:20,y:-10})
}
}

