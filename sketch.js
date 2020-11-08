var myEngine, myWorld, ball, ground, groundOption, ballOption;
const Engine = Matter.Engine; const World = Matter.World; const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);

  groundOption = {isStatic:true};
  
  ballOption = {restitution:1};
  

  myEngine = Engine.create();
  myWorld = myEngine.world;


  ball = Bodies.circle(400,25,50, ballOption);
  World.add(myWorld,ball);

  ground = Bodies.rectangle(400,375,800,50,groundOption);
  World.add(myWorld,ground);


  rectMode(CENTER);

  ellipseMode(RADIUS);


  noStroke();
}

function draw() {
  background(0,150,255);


  Engine.update(myEngine);


  fill("red");
  circle(ball.position.x,ball.position.y,50);


  fill("brown");
  rect(ground.position.x,ground.position.y,800,50);
}