var paper, bL1, bL2, bL3;
var ground;
var dustbin, img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	img = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin = createSprite(width-160, height-90)
	dustbin.addImage(img)
	dustbin.scale=0.5;

	ground = new Ground(width/2, height-5, width, 20)

	bL1 = new DL(width-110,height-85,20,150);
	bL2 = new DL(width-210,height-85,20,150);
	bL3 = new DL(width-165,height-20,100,20);

	paper = new Paper(100, 620, 50, 50);
	
	console.log(paper.body.position.x)

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

   bL1.display();
   bL2.display();
   bL3.display();
	dustbin.display();
  paper.display();
  ground.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:52, y:-80});
	}
}


