class Catapult {
  constructor(x, y, width, height) {
    this.y = y;
    this.x = x
    this.width = width
    this.height = height

    this.woodBase = loadImage("assets/woodBox.png");
    this.woodenSpoon = loadImage("assets/woodSpoon.png")
  }

  display() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.woodenSpoon, 0, 0, this.width, this.height);
    pop();
    image(this.woodBase, 70, 20, 200, 200);
    noFill();
  }

}



