//PVector location = new PVector(100,100);
//PVector velocity = new PVector(1,3.3);
var count
//break; gets you out of switch(){}
let rad=20;

function circle1(){
  circle(500, 500, 105);
} 
function circle2(){
  circle(500, 500, 85);
}
function circle3(){
  circle(500, 500, 65);
}
function circle4(){
circle(500, 500, 45);
}
function circle5(){
circle(500, 500, 25);
}
var radius=1

function setup() {
  createCanvas(1000, 1000);
  background(0);
  frameRate(30);
  

}

function draw() {
colorMode(RGB);
noStroke();


if(rad<= width && rad<= height){
rad++;  
let from = color(1, 1, 20);//color intervals
let to = color(1, 1, 99);
colorMode(RGB); 
let interA = lerpColor(from, to, 0.25);
let interB = lerpColor(from, to, 0.50);
let interC = lerpColor(from, to, 0.75);
fill(from);
circle1(500, 500, 105);
fill(interA);
circle2(500, 500, 85);
fill(interB);
circle3(500, 500, 65);
fill(interC);
circle4(500, 500, 45);
fill(to);
circle5(500, 500, 25);
   }else{
    rad=0;    
  }
    
    ellipse(width/2, height/2, rad, rad);
}










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
    //fill(175);
   // rect(x,y,w,h);
 // }
 
//}
//Liquid liquid;
 
//function setup() {
//Initialize a Liquid object. Note the coefficient is low (0.1), otherwise the object would come to a halt fairly quickly (which may someday be the effect you want).
  //liquid = new Liquid(0, height/2, width, height/2, 0.1);
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