
// reference is interactivity 1

// if you click the middle of the circle than you are able to change color of circle

let r, g, b;

function setup() 
{
  createCanvas(400, 400);
  //random color selection
  r = random(255);
  g = random (50);
  b = random(255);
  
}

function draw() 

{

background(130, 65, 92); //environment
strokeWeight(2.5);//stroke thickness
stroke(166, 85, 120);//color outline
fill(r,g,b, 127);//color changing
ellipse(200,200,90,90);//circle position
 
    

  }

  function mousePressed() //when you click the mouse

  {

  	let d = dist(mouseX, mouseY, 200,200);
  	if(d < 100)  // new color values are choosen
  	{

   r = random(255);
   g = random (50);
   b = random(255);

   // a limited selection of colors are changed once pressed

  	}
  }


  
 





