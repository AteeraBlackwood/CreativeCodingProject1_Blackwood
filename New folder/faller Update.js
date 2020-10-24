function Faller{
	fill(255);
	circle(500,100,20);
	
	stroke(2.5);
	strokeFill(255);
	line(500,70,500,100);
	line(500,65,505,55);
	line(500,65,495,75);
	line(500,100,505,90);
	Line(500,100,495,90);
}

function hand(){//the ellipses are fingers, the circle is the palm
	noStroke();
	fill(237, 209, 157);//a flesh tone
	circle(350,750,300);
	rotate(PI/33);
  ellipse(300,540,75,200);
  ellipse(380,500,75,200);
  ellipse(460,500,75,200);
  ellipse(540,540,75,200);
  ellipse(580,700,200,75);
}