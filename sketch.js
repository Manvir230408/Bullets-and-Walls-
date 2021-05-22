

var car,wall;


var speed, weight; 

var thickness, bullet


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)
	thickness=random(22,83)


	bullet=createSprite(50, 200, 50,50);   

	//car.velocityX = speed;

	//car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

bullet.velocityX=speed

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  

  if(hasCollided(bullet,wall)){
	  bullet.velocityX = 0
	  var damage = 0.5*weight*speed*speed/(thickness*thickness);
	  if(damage>10){
		  wall.shapeColor = color(255,0,0);
	  }
	  if(damage>10){
		  wall.shapeColor=color(0,255,0)
	  }
  }
  
  
  drawSprites();
 
}

function hasCollided(bullet1,wall1){
	bulletRightEdge = bullet1.x + bullet1.width
	ballLeftEdge = wall1.x
	if(bulletRightEdge>=ballLeftEdge){
		return true
	}
	return false
}



