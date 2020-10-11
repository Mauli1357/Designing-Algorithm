var movrect, fixrect;

function setup() {
  createCanvas(1200,800);
  movrect = createSprite(600,400,80,30);
  movrect.shapeColor = "red";

  fixrect = createSprite(600,400,30,80);
  fixrect.shapeColor = "red";
}

function draw() {
  background(0); 
  
  movrect.x = mouseX;
  movrect.y = mouseY;

  if (fixrect.x - movrect.x < fixrect.width/2 + movrect.width/2 &&
    movrect.x - fixrect.x < fixrect.width/2 + movrect.width/2 &&
    fixrect.y - movrect.y < fixrect.height/2 + movrect.height/2 &&
    movrect.y - fixrect.y < fixrect.height/2 + movrect.height/2)
    {
      movrect.shapeColor = "orange";
      fixrect.shapeColor = "orange";
    }
    else
    {
      movrect.shapeColor = "red";
      fixrect.shapeColor = "red";
    }

  drawSprites();
}