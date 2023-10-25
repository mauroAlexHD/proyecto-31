


function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre

}


function draw() {
  background("black");
  drawSprites();
  fill("white")
  text("x: "+ mouseX +"y: "+ mouseY, 50,50)
 var b1 = createSprite(70,189,25,324)
 b1.shapeColor= " red"
 var b2 = createSprite(180,189,25,324)
 b2.shapeColor= " blue"
 var b3 = createSprite(125,41,84,27)
 b3.shapeColor= " yellow"
 var b4 = createSprite(126,189,86,27)
 b4.shapeColor= "green"
 var b5 = createSprite(260,189,25,324)
 b5.shapeColor= " white"
 var b6 = createSprite(348,337,150,27)
 b6.shapeColor= " yellow"
 var b7 = createSprite(510,189,25,324)
 b7.shapeColor= " "
 var b8 = createSprite(590,337,150,27)
 b8.shapeColor= "green"
 var b9 = createSprite(590,189,150,27)
 b9.shapeColor= " orange"
 var b10 = createSprite(590,41,150,27)
 b10.shapeColor= "purple"
 
}