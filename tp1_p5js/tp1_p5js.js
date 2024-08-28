//link de video explicativo
//Juan Felipe Martinez Reinaz
//Legajo 119084/4
let obra;
let cantCirculos=6;
let TamEllipses=40;
let cantCuadrantes=4;
let cantY=10;

function preload() {
  obra=loadImage("data/F_25.jpg");
}

function setup() {
  createCanvas(800, 400);
  image(obra, 0, 0, 400, 400);
}


function draw() {
  ilusionOptica();
}

function ilusionOptica() {
  let colores;
  }
  push()
  translate(400+200, 200);
  for (var i=0; i<cantCuadrantes; i++) {
    for (var y=0; y<cantY; y++) {
      if (y%2==0 && colorearLineas() == true) {
        colores = color ( random(255), 0, random(255));
        fill(colores);
      } else if (y&2==0 && colorearLineas() == false) {
        fill(255);
      } else {
        fill(0);
      }
      rect(0, y*20, 200, 20);
    }
    rotate(radians(90));
  }
  pop()
  for ( var i=cantCirculos; i>0; i--) {
    if ((i+cantCirculos)%2==0) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(600, 200, TamEllipses*i, TamEllipses*i);
  }


var colorearLineas
  if(mousePressed){
    return true;
  } else {
    return false;
  }
}
