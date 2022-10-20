class Bomb {
  constructor(ctx, player, enemy, imgsrc) {
    this.w = 50;
    this.h = 50;
    this.ctx = ctx;
    this.player = player; // player who owns the bomb
    // this.bombPos1 = [1, 1];
    // this.bombPos2 = [11, 11];
    this.enemy = enemy;
    this.tileSize = 50;
    this.y = this.player.position[0];
    this.x = this.player.position[1];
    this.image = new Image();
    this.image.src = imgsrc;
    this.timer = 5; // bomb blows up after 3 seconds.
  }
  drawBomb() {
    this.ctx.drawImage(
      this.image,
      // this index = x
      this.x * this.tileSize,
      // this index = y
      this.y * this.tileSize,
      this.w,
      this.h
    );
  }

  playerExplode() {
    //up
    if (
      this.enemy.position[0] === this.y - 1 &&
      this.enemy.position[1] === this.x
    ) {
      return this.player;
    }
    //down
    if (
      this.enemy.position[0] === this.y + 1 &&
      this.enemy.position[1] === this.x
    ) {
      return this.player;
    }
    //left
    if (
      this.enemy.position[1] === this.x - 1 &&
      this.enemy.position[0] === this.y
    ) {
      return this.player;
    }
    //right
    if (
      this.enemy.position[1] === this.x + 1 &&
      this.enemy.position[0] === this.y
    ) {
      return this.player;
    }
  }
}
