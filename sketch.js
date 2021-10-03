const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow = [];

function preload()
{
  backgroundImg = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  drawSprites();

  if(frameCount%50 === 0)
  {
    snow.push(new Snow(random(0,800),0))
  }

  for(var k = 0; k< snow.length ; k++)
  {
     snow[k].display();
  }


  
}