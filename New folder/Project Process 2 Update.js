
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
var a,b;
let vb=0; //is velocity usually vy
a=500
b=100

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
  if(circleSizeX>=1000){//this kinda changes the scene since the perspective is different
  //I want this part to start when the final circle fills the screen but this command would require specific timing
      noStroke();
      fill(255);
      ellipse(650,150,lightWidth,lightHeight);// borrowed idea from https://www.openprocessing.org/sketch/466530
      lightWidth=lightWidth-5;
      lightHeight=lightHeight-5;
    hand();
    if(lightWidth<20){  
  background(0);
    }
  }
  if(lightWidth<20){
  faller();
  b+=2; 
    //if(b>=1000){
      //vb=0;
  
    //}
    circleLoop();
      }
  
}