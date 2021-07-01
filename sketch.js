
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground (400,340,800,15);
    ball = new Ball(100,330);
    log1 = new Log (500,290,20,80)
	  log2 = new Log (595,320,170,20)
    log3 = new Log (690,290,20,80)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 ground.display();
 ball.display();
 log1.display();
 log2.display();
 log3.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {

       Matter.Body.applyForce(ball.body,ball.body.position,{x:125,y:-125});

    }
}

