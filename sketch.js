var mr ,fr;
function setup() {
  createCanvas(800,400);
 mr= createSprite(400, 200, 50, 50);
  fr= createSprite(300,200,50,50);
  mr.shapeColor="green";
  fr.shapeColor="green";

}

function draw() {
  background("blue"); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  if(mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2 && mr.y-fr.y<mr.heigth/2+fr.heigth/2 && fr.y-mr.y<fr.heigth/2+mr.heigth/2)
{
  mr.shapeColor="red";
  fr.shapeColor="red";
}
else{
  mr.shapeColor="green";
  fr.shapeColor="green";

}
  drawSprites();
}