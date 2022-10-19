class Bomb {
  constructor(ctx, player, enemy) {
    this.w = 38;
    this.h = 38;
    this.ctx = ctx;
    this.player = player; // player who owns the bomb
    // this.bombPos1 = [1, 1];
    // this.bombPos2 = [11, 11];
    this.enemy = enemy;
    this.tileSize = 38;
    this.y = this.player.position[0];
    this.x = this.player.position[1];
    this.image = new Image();
    this.timer = 180; // bomb blows up after 3 seconds.
  }
  drawBomb() {
    this.image.src = "/docs/assets/images/bomb.png";
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
      alert("Damaged enemy");
      //down
    }
    /*     if (this.tileMap.map[bomb.y + 1][bomb.x] === 3) {
      this.tileMap.map[bomb.y + 1][bomb.x] = 2;
      //left
    }
    if (this.tileMap.map[bomb.y][bomb.x - 1] === 3) {
      this.tileMap.map[bomb.y][bomb.x - 1] = 2;
      //right
    }
    if (this.tileMap.map[bomb.y][bomb.x + 1] === 3) {
      this.tileMap.map[bomb.y][bomb.x + 1] = 2;
    } */
  }
}
