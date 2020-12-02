var hr;
var mn;
var sc;

var scAngle , mnAngle;
function setup() {
  createCanvas(400,400);
  
}

function preload(){
  backgroundimg = loadImage("a3e19139ededdd56516d28aacfc020a6.jpg"); 
}

function draw() {
  background(backgroundimg);
  
  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);
  angleMode(DEGREES);
  rotate(-90);
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,130,0);
  pop();

  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0,0,330,330,0,scAngle);
  

  push();
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,315,315,0,mnAngle);
  
  push();
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,300,300,0,hrAngle);
}