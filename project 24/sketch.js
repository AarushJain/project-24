const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ 
	
}

function setup() {
	createCanvas(800, 700);

	box1=createSprite(600,height-50,200,20);
	box2=createSprite(700,height-90,20,100);
	box3=createSprite(500,height-90,20,100);
	box1.shapeColor=color(255,0,0)
	box2.shapeColor=color(255,0,0)
	box3.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	Matter.Bodies.circle(400,400, 100,);

	ellipse()

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(100,630,55,55)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
	ellipse(100,630,55,55);
	matter.body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:85});	
	}	
	
	}
	












