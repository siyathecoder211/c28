
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var sling;

function preload()
{
	boyimg=loadImage("boy1.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    sand=new ground(600,700,12000,20);
	mangoTree=new tree(1000,450,500,500);
	mango1=new mango(840,390,40);
	mango2=new mango(950,400,40);
	mango3=new mango(1100,357,40);
	mango4=new mango(1030,250,45);
	mango5=new mango(900,300,35);
	boy=createSprite(190,590,40,40);
	boy.addImage(boyimg);
	boy.scale=0.12;
	stone=new patthar(100,600,30);
	Chain=new connection(stone.body,{x:140,y:560});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  drawSprites();
  sand.display();
  mangoTree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango5.display();
  mango4.display();
  stone.display();
  Chain.display();  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  text(600,200,"Press Space To Get A Second Chance To Play");


}

function mouseDragged(){
	//if(keyCode=leftMouseButton){
	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
	//}
}
function mouseReleased(){
    Chain.fly();
}

function detectCollision(Stone,Mango){
	posmango=Mango.body.position;
	posstone=Stone.body.position;

	var distance=dist(posstone.x,posstone.y,posmango.x,posmango.y);
	if(distance<=Stone.r+Mango.r){
		Matter.Body.setStatic(Mango.body,false);
	}
	
}


  function keyPressed(){
	if(keyCode===32){
	  Matter.Body.setPosition(stone.body,{x:140,y:560});
	  Chain.attach(stone.body);
	}
  }
