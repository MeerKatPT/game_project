class Controls {
  constructor(player, player2, bombArr, ctx, map) {
    this.player = player;
    this.player2 = player2;
    this.bombArr = bombArr;
    this.ctx = ctx;
    this.map = map;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      // console.log(this.player.position);
      // console.log(this.map[this.player.position[0]]);
      switch (e.code) {
        case "KeyS":
          if (
            this.map[this.player.position[0] + 1][this.player.position[1]] === 2
          ) {
            this.player.position[0] += 1;
            console.log("Moved down");
          }
          break;
        case "KeyW":
          if (
            this.map[this.player.position[0] - 1][this.player.position[1]] === 2
          ) {
            this.player.position[0] -= 1;
            console.log("Moved up");
          }
          break;
        case "KeyA":
          if (
            this.map[this.player.position[0]][this.player.position[1] - 1] === 2
          ) {
            this.player.position[1] -= 1;
            console.log("Moved left");
          }
          break;
        case "KeyD":
          if (
            this.map[this.player.position[0]][this.player.position[1] + 1] === 2
          ) {
            this.player.position[1] += 1;
            console.log("Moved right");
          }
          break;
      }
    });
  }
  //keyboard for player2
  keyboardEvents2() {
    window.addEventListener("keydown", (e) => {
      // console.log(this.player.position);
      // console.log(this.map[this.player.position[0]]);
      switch (e.code) {
        case "ArrowDown":
          if (
            this.map[this.player2.position[0] + 1][this.player2.position[1]] ===
            2
          ) {
            this.player2.position[0] += 1;
            console.log("Moved down");
          }
          break;
        case "ArrowUp":
          if (
            this.map[this.player2.position[0] - 1][this.player2.position[1]] ===
            2
          ) {
            this.player2.position[0] -= 1;
            console.log("Moved up");
          }
          break;
        case "ArrowLeft":
          if (
            this.map[this.player2.position[0]][this.player2.position[1] - 1] ===
            2
          ) {
            this.player2.position[1] -= 1;
            console.log("Moved left");
          }
          break;
        case "ArrowRight":
          if (
            this.map[this.player2.position[0]][this.player2.position[1] + 1] ===
            2
          ) {
            this.player2.position[1] += 1;
            console.log("Moved right");
          }
          break;
        case "Space":
          if (
            this.map[this.player2.position[0]][this.player2.position[1]] === 2
          ) {
            this.bombArr.push(new Bomb(this.ctx, this.player2, this.player));
            console.log("Dropped bomb");
          }
          break;
      }
    });
  }
}
