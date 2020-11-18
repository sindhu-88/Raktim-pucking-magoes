
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var boy, boyImage;

function preload()
{
	boyImage=loadImage("image/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy=createSprite(100,500,20,20)
	boy.addImage("boy",boyImage)
	boy.scale=0.15;

	//Create the Bodies Here.
//sling=new Ou(10,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



