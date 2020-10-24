//PVector location = new PVector(100,100);
//PVector velocity = new PVector(1,3.3);

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
}

function draw() {
colorMode(RGB);
stroke(255);

let from = color(1, 1, 20);
let to = color(1, 1, 99);
colorMode(RGB); // Try changing to HSB.
let interA = lerpColor(from, to, 0.25);
let interB = lerpColor(from, to, 0.50);
let interC = lerpColor(from, to, 0.75);
fill(from);
circle(500, 500, 105);
fill(interA);
circle(500, 500, 85);
fill(interB);
circle(500, 500, 65);
fill(interC);
circle(500, 500, 45);
fill(to);
circle(500, 500, 25);
	
}