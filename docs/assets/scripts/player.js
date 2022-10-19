// Class for the player which can be extended.
// Player has a name and a row/col starting point. Also has an image to be added

class Player {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.lives = 3;
    this.image = new Image();
    // First index = y, second index = x
    this.position = [1, 1];
    this.tileSize = 50;
    // image.addEventListener("load", () => {
    //   this.image = image;
    //   this.draw();
    // });
  }

  draw() {
    this.image.src = "/docs/assets/images/player1.png";
    this.ctx.drawImage(
      this.image,
      // this index = x
      this.position[1] * this.tileSize,
      // this index = y 
      this.position[0] * this.tileSize,
      this.w,
      this.h
    );
  }
}
