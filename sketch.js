
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	world.gravity.scale=0.015

	//Create the Bodies Here.


	Engine.run(engine);
  bobObject1 = new Paper(300,100,20,20)
  bobObject2 = new Paper(350,100,20,20)
  bobObject3 = new Paper(400,100,20,20)
  bobObject4 = new Paper(450,100,20,20)
  bobObject5 = new Paper(500,100,20,20)
  roofObject = new Roof(400,100,400,30)
  rope1= new Rope(bobObject1.body,roofObject.body,-100,0)
  rope2= new Rope(bobObject2.body,roofObject.body,-50,0)
  rope3= new Rope(bobObject3.body,roofObject.body,0,0)
  rope4= new Rope(bobObject4.body,roofObject.body,50,0)
  rope5= new Rope(bobObject5.body,roofObject.body,100,0)
 
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){}
	Matter.Body.setPosition(bobObject1.body, {x: 100 , y: 100});
}
