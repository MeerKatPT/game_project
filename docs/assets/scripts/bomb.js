class Bomb {
  constructor(ctx, player, enemy) {
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
    this.timer = 180; // bomb blows up after 3 seconds.
  }
  drawBomb() {
    this.image.src = "docs/assets/images/bomb2.png";
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
      document.getElementById("game-over").style.display = "block";
    }
    //down
    if (
      this.enemy.position[0] === this.y + 1 &&
      this.enemy.position[1] === this.x
    ) {
      document.getElementById("game-over").style.display = "block";
    }
    //left
    if (
      this.enemy.position[1] === this.x - 1 &&
      this.enemy.position[0] === this.y
    ) {
      document.getElementById("game-over").style.display = "block";
    }
    //right
    if (
      this.enemy.position[1] === this.x + 1 &&
      this.enemy.position[0] === this.y
    ) {
      document.getElementById("game-over").style.display = "block";
    }
  }
}
