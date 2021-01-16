const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain1;
var backgroundImg;
var score = 0;

function preload(){
bgChange();

}
function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;

    //CREATING OBJECTS
    ground = new Ground(350,height-10,width,20);
    ground1 = new Ground(500,height-30,300,20);

    b1 = new Box(420,540,30,40);
    b2 = new Box(450,540,30,40);
    b3 = new Box(470,540,30,40);
    b4 = new Box(500,540,30,40);
    b5 = new Box(530,540,30,40);
    b6 = new Box(450,500,30,40);
    b7 = new Box(470,500,30,40);
    b8 = new Box(500,500,30,40);
    b9 = new Box(470,460,30,40);
    poly = new Polygon(200,550,30);
    chain1 = new Rope(poly.body,{x:200,y:550});

}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
    fill("White");
    textSize(20);
    text("My Score:" + score, 500, 100)}
else
    {background("blue")
    fill("White");
    textSize(20);
    text("My Score:" + score, 500, 100)};

    //background("Pink");
    Engine.update(engine);
    ground.display();
  ground1.display();
  fill("Blue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  poly.display();
  chain1.display();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
 b5.score();
b6.score();
b7.score();


}

function mouseDragged(){
Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){
chain1.fly();


}

function keyPressed(){
if(keyCode===32){
   chain1.attach(poly.body);
}
}
async function bgChange(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var responseJSON = await response.json()
  var dateTime = responseJSON.datetime
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>6 && hour<=12){
  bg = "bg.png";
  }
  else{
      bg= "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
  
  }