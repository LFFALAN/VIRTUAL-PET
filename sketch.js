//Create variabl
var dog,happydog,database,foodS,foodStock;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg1" )
  happydog=loadImage("images/dogImg2")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here

}



