const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies
var engine,world;
function setup(){


  createCanvas(600,300);
  engine= Engine.create();
  world=engine.world;
var options={
  isStatic:true
}
var ball_options={
  restitution:1.0
}
  ground=Bodies.rectangle(300,270,600,5,options);
  World.add(world,ground)
  ball=Bodies.circle(300,150,20,ball_options);
  World.add(world,ball);
}


function draw(){
  Engine.update(engine)
  background(0);
  rectMode(CENTER)
  fill("white")
  rect(ground.position.x,ground.position.y,600,5);
  ellipse(ball.position.x,ball.position.y,20,20)
}