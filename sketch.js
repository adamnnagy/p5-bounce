var balls = [];
var r, g, b = 0;


function setup() {
  createCanvas(600,400);
  balls.push(new Ball(20, random(width), random(height)));

}

function draw() {

  background(r,g,b, 127);

  balls.forEach(function(item, index, array){
    if (item.bounce()) {

      r = random(255);
      b = random(255);
      g = random(255);

    }
    item.move();
    item.display();

  });

// if (mousePressed()) {
//   console.log('mouse');
// }


  // mouseClicked();

}

class Ball {

  constructor(diameter, x, y) {
    this.x = x+diameter;
    this.y = y+diameter;
    this.diameter = diameter;
    this.xspeed = random(1,2);
    // *floor(random(-2, 1));
    this.yspeed = random(1,2);
    // *floor(random(-1, 1));
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    console.log('thespeed is :', this.xspeed, this.yspeed);
  }

bounce() {
    if (this.x < 0 + this.diameter/2 || this.x > width - this.diameter/2) {
      this.xspeed = this.xspeed*-1;
      console.log(this.xspeed);
      console.log('bounced');
      return true;
    } else if (this.y < 0 + this.diameter/2 || this.y > height - this.diameter/2) {
      this.yspeed *= -1;
      console.log(this.yspeed);
      console.log('bounced');
      return true;
    } else {
      return false;
    }

  }

 display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

// mouse interaction


function mouseClicked() {
  balls.push(new Ball(20, mouseX, mouseY));
  return false;
}
