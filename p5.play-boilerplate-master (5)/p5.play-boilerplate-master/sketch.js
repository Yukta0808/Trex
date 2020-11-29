var car, wall;

var speed, weight;



function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(200,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(0);

  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < car.height/2 + wall.height/2 && wall.y - car.y < wall.height/2 + car.height/2){

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
        if(deformation > 180){
          car.shapeColor = color(225,0,0);
        }
        if(deformation < 180 && deformation > 100){
          car.shapeColor = color(230,230,0);
        }
        if(deformation < 180){
          car.shapeColor = color(0,225,0);
        }
    }



  drawSprites();
}
