class Player2 {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.lives = 3;
    this.image = new Image();
    // First index = y, second index = x
    this.position = [11, 11];
    this.tileSize = 50;
    // image.addEventListener("load", () => {
    //   this.image = image;
    //   this.draw();
    // });
  }

  draw2player() {
    this.image.src = "/docs/assets/images/player2.png";
    this.ctx.drawImage(
      this.image,
      this.position[1] * this.tileSize,
      this.position[0] * this.tileSize,
      this.w,
      this.h
    );
  }
}
