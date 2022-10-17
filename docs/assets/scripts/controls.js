class Controls {
  constructor(player) {
    this.player = player;
  }
  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        // case "ArrowDown":
        //   if (this.player.y > 38) {
        //     this.player.y += 38;
        //   }
        //   break;
        // case "ArrowUp":
        //   if (this.player.y < 38) {
        //     this.player.y -= 38;
        //   }
        // break;
        case "ArrowLeft":
          if (this.player.x > 38) {
            this.player.x -= 38;
          }
          break;
        case "ArrowRight":
          if (this.player.x + this.player.w < 418) {
            this.player.x += 38;
          }
          break;
      }
    });
  }
}
