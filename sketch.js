
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, ground;
var engine, myWorld;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	tree = new Tree(50,50);
	ground = new Ground(20,10)

	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display()
  ground.display()

  drawSprites();
 
}



