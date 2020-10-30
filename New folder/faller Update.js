function faller(){//stick figure for part 3
	fill(245, 220, 220);
	circle(a,b,20);
	
	strokeWeight(2.5);
	stroke(245, 220, 220);
	line(a,b-30,a,b);
	line(a,b-35,a+10,b-45);
	line(a,b-35,a-10,b-45);
	line(a,b-25,a+10,b-10);
	line(a,b-25,a-10,b-10);
}

function circleLoop(){
	let c = 0;
  let d = 500;
	for(let i=0; i<50; i++){
  	for (let j=0; j<500; j++){
    	ellipse(c,d,10);
			noStroke();
			fill(0,0,random(161,255));
    	c+=10;
  	}
  	c=0;
  	d+=10;
    ellipse(c,d,10);
}