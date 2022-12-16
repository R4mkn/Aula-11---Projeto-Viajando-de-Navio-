var seaimg
var shipImg
function preload(){

}

function setup(){
  createCanvas(400,400);
  seaimg.addImage(seaimg);  
  seaimg = loadImage("sea.png")   
  shipImg = loadAnimation(ship-1, ship-2, ship-3);
}

function draw() {
  background("blue");

  drawSprites();
  if(sea.x = 0){
    sea.x = width/2;
  }
 
}
