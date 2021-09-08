
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var lol

var ball;

var top_wall;

var leftLine
var rightLine
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);
  leftLine=new Ground (10,200,20,600)
  rightLine=new Ground (390,200,20,600)
  lol = createImg('up.png')
  lol.position(50,50)
  lol.size(50,50)
  lol.mouseClicked(hforce)


var options = {

restitution: 1
}
ball= Bodies.circle (200,200,20,options)
World.add(world,ball)
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
ellipse(ball.position.x,ball.position.y,20)
rightLine.show();
leftLine.show();
  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
}


function hforce(){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.00,y:0.005})










}