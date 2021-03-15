const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particleCount = 0;
//var line;
var particle;

var gamestate = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  rightWall = new Ground(width,height/2,5,height);
  lefttWall = new Ground(0,height/2,5,height);

  for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50){

   plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50){
    
   plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50){
    
   plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50){
    
   plinkos.push(new Plinko(j,375));
  } 
}
function draw() {
  background("black");
  fill("white")
  textSize(50)
 
  Engine.update(engine);
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  line.shapeColor="white";

  if(gamestate==="play"){
 /*  if(frameCount%60===0){
      particles.push(new Particle(random(0, width),10,10));
      
    }*/
  
   if(particleCount>=5){
      gamestate = "end";
   }
  }


  for (var j = 0; j < particles.length; j++) {
   particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  if(particle!=null){
    particle.display();
    console.log(particle.body.position.x,particle.body.position.y)
    if(particle.body.position.y>780){
      if(particle.body.position.x<300){
        score = score + 500;
        particle=null;
      }
      else if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score + 100;
        particle=null;
      }
      else if(particle.body.position.x>601 && particle.body.position.x<900){
        score = score + 200;
        particle=null;
      }
    }
  }

  text("Score : "+ score,20,40);
  fill(255)
  strokeWeight(10);
  //line (0,400,800,400);

  
  fill(255);
  textSize(30)
  text("500",15,550);

  fill(255);
  text("500",95,550);

  fill(255);
  text("500",175,550);

  fill(255);
  text("500",255,550);

  fill(255);
  text("100",335,550);

  fill(255);
  text("100",415,550);

  fill(255);
  text("100",495,550);

  fill(255);
  text("200",575,550);

  fill(255);
  text("200",655,550);

  fill(255);
  text("200",735,550);
}

function mouseClicked(){
  console.log(gamestate)
  if(gamestate!=="end"){
    particle=new Particle(mouseX,10,10,10);
    particleCount = particleCount + 1;
  }
  console.log(particleCount)
}