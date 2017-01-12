var gravity = 0.1; //Crea una constante de aceleración
var particle;

function Particle(x, y) { //Crea un objeto Partícula
  this.x = x; //posición de la partícula
  this.y = y;

  this.yspeed = 0; // Velocidad inical

  this.history=[]; //Crea un camino

  this.update = function() { //Como afecta la aceleración a la partícula
    this.y += this.yspeed;
    this.yspeed += gravity;
    if (this.y > height) { // "Siente" el piso y rebota
      this.y = height;
      this.yspeed *= -0.9; //Pierde energía
    }
    
    var v = createVector(this.x,this.y)
    this.history.push(v);
    
    if (this.history.length>15){ this.history.splice(0,1);}
  }

  this.show = function() { // Forma de la partícula
    fill(51);
    ellipse(this.x, this.y, 20, 20);
    
    for (i=0;i<this.history.length;i++){
      var pos= this.history[i];
      fill(51,50)
      ellipse(pos.x,pos.y,i,i)
    }
  }
}

function setup() {
  createCanvas(600, 400);
  particle = new Particle(100, 50); //Llama un nuevo objeto
}

function draw() {
  background(255);
  particle.show();
  particle.update();
}
