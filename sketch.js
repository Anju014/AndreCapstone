const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var backgroundImg, StoneImg
var tower
var obstacle1,catapult1

function preload() {
  backgroundImg = loadImage("assets/warBackground.png")
  StoneImg = loadImage("assets/stone.png")
  towerImg = loadImage("assets/tower.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  obstacle1 = new Obstacles(width-200, height-250, 50, 50)

  catapult1 = new Catapult(100,100,50,50)

}


function draw() {
  background("white")
  Engine.update(engine);

  image(backgroundImg, 0, 0, 2000, 1000);

  obstacle1.display()
  catapult1.display()

}

