class Controls {
  constructor(player) {
    this.player = player;
    this.map = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1],
      [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
      [1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1],
      [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
      [1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1],
      [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
      [1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1],
      [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
      [1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1],
      [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1],
      [1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      // console.log(this.player.position);
      // console.log(this.map[this.player.position[0]]);
      switch (e.code) {
        case "ArrowDown":
          if (
            this.map[this.player.position[0] + 1][this.player.position[1]] === 2
          ) {
            this.player.position[0] += 1;
            console.log("Moved down");
          }
          break;
        case "ArrowUp":
          if (
            this.map[this.player.position[0] - 1][this.player.position[1]] === 2
          ) {
            this.player.position[0] -= 1;
            console.log("Moved up");
          }
          break;
        case "ArrowLeft":
          if (
            this.map[this.player.position[0]][this.player.position[1] - 1] === 2
          ) {
            this.player.position[1] -= 1;
            console.log("Moved left");
          }
          break;
        case "ArrowRight":
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
}
