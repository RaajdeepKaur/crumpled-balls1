const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
  
   // Create the Bodies Here. 
   var ball = Bodies.circles(50,350,50);
    World.add(ball,world);


   Engine.run(engine);
   
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  drawSprites();
}

function keyPresseed(){
  if(keyCode == UP_ARROW){

    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
  }
}