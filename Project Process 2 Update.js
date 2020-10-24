//PVector location = new PVector(100,100);
//PVector velocity = new PVector(1,3.3);

//break; gets you out of switch(){}

function circle1(){
  circle(width/2, height/2,circleSizeX ,circleSizeY);
} 
function circle2(){
  circle(width/2, height/2,circleSizeX ,circleSizeY);
}
function circle3(){
  circle(width/2, height/2,circleSizeX ,circleSizeY);
}
function circle4(){
circle(width/2, height/2,circleSizeX ,circleSizeY);
}
function circle5(){
circle(width/2, height/2,circleSizeX ,circleSizeY);
}
function circle6(){
circle(width/2, height/2,circleSizeX ,circleSizeY);
}
function circle7(){
circle(width/2, height/2,circleSizeX ,circleSizeY);
}


var circleSizeX = 25;
var circleSizeY = 25;
var x, y;
var lightWidth=300
var lightHeight=300

function setup() {
  createCanvas(1000, 1000);
  background(0);
  frameRate(60);
}

//I finally found a method of expansion that works for me https://www.openprocessing.org/sketch/963724
function draw(){
colorMode(RGB);
noStroke();

{let from = color(1, 1, 99);//color intervals
let to = color(1, 1, 20);
colorMode(RGB); 
let interA = lerpColor(from, to, 0.143);
let interB = lerpColor(from, to, 0.286);
let interC = lerpColor(from, to, 0.429);
let interD = lerpColor(from, to, 0.571);
let interE = lerpColor(from, to, 0.714);   
fill(from);
circle1(width/2, height/2,circleSizeX ,circleSizeY);
  circleSizeX++;
  circleSizeY++; 
  if(circleSizeX>150){
fill(interA);
circle2(width/2, height/2,circleSizeX ,circleSizeY);
  circleSizeX++;//makes the circle expand
  circleSizeY++;}
  if(circleSizeX>300){
fill(interB);
circle3(width/2, height/2,circleSizeX ,circleSizeY);
  circleSizeX++;
  circleSizeY++;}
  if(circleSizeX>450){
fill(interC);
circle4(width/2, height/2,circleSizeX ,circleSizeY);
  circleSizeX++;
  circleSizeY++;}
  if(circleSizeX>600){  
fill(interD);
circle5(width/2, height/2,circleSizeX ,circleSizeY);
  circleSizeX++;
  circleSizeY++;}
   if(circleSizeX>750){
fill(interE);
circle6(width/2, height/2,circleSizeX ,circleSizeY);
  circleSizeX++;
  circleSizeY++;} 
   if(circleSizeX>900){
fill(to);//becomes darker to represent lessening of light
circle7(width/2, height/2,circleSizeX ,circleSizeY);}
  circleSizeX++;
  circleSizeY++; 
  }
  //part 2
  if(mouseIsPressed){//this kinda changes the scene since the perspective is different
  //I want this part to start when the final circle fills the screen but this command would require specific timing
    
    
      noStroke();
      fill(255);
      circle(650,150,lightWidth,lightHeight);// borrowed idea from https://www.openprocessing.org/sketch/466530
      lightWidth=lightWidth-5;
      lightHeight=lightHeight-5;
    hand();
    if(lightWidth<20){  
  background(0);
    }
  }
}
  

  
//}

//function applyForce(){
  //acceleration =force;
//}









//class Liquid {
//The liquid object includes a variable defining its coefficient of drag.
  //float x,y,w,h;
  //float c;
 
  //Liquid(float x_, float y_, float w_, float h_, float c_) {
   // x = x_;
    //y = y_;
   // w = w_;
    //h = h_;
    //c = c_;
  //}
 
  //function display() {
   // noStroke();
    //fill(1, 1, 20,50);
   // rect(x,y,w,h);
 // }
 
//}
//Liquid liquid;
 
//function setup() {
//Initialize a Liquid object. Note the coefficient is low (0.1), otherwise the object would come to a halt fairly quickly (which may someday be the effect you want).
  //liquid = new Liquid(0, height/1.3, width, height/1.3, 0.1);// I want the liquid to take up more of the screen
//}
//if (movers[i].isInside(liquid)) {
//If a Mover is inside a Liquid, apply the drag force.
 // movers[i].drag(liquid);
//}
//boolean isInside(Liquid l) {
//This conditional statement determines if the PVector location is inside the rectangle defined by the Liquid class.
 // if (location.x>l.x && location.x<l.x+l.w && location.y>l.y && location.y<l.y+l.h)
 // {
  //  return true;
  //} else {
 //   return false;
  //}
//}
//void drag(Liquid l) {
 
    //float speed = velocity.mag();
//The force’s magnitude: Cd * v~2~
    //float dragMagnitude = l.c * speed * speed;
 
    //PVector drag = velocity.get();
    //drag.mult(-1);
//The force's direction: -1 * velocity
    //drag.normalize();
 
//Finalize the force: magnitude and direction together.
    //drag.mult(dragMagnitude);
 
//Apply the force.
    //applyForce(drag);
  //}