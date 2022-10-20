class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.controls = null;
    this.tileSize = 50;
    this.intervalId = null;
    this.bombArr = [];
    this.tileMap = null;
    this.overimg = new Image();
  }

  start() {
    this.player = new Player(50, 50, 50, 50, this.ctx);
    this.player2 = new Player2(50, 50, 50, 50, this.ctx);
    //this.bomb = new Bomb(38, 38, 38, 38, this.owner, this.ctx, this.player2);
    this.tileMap = new TileMap(this.tileSize);
    this.controls = new Controls(
      this.player,
      this.player2,
      this.bombArr,
      this.ctx,
      this.tileMap.map
    );
    this.controls.keyboardEvents();
    this.controls.keyboardEvents2();
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  update = () => {
    this.tileMap.draw(this.canvas, this.ctx);
    this.player.draw();
    this.player2.draw2player();
    this.updateBombs();
    // this.controls.bomb.drawBomb();
  };

  // stop() {
  //   clearInterval(this.intervalId);
  // }

  updateBombs = () => {
    for (let i = 0; i < this.bombArr.length; i++) {
      if (this.bombArr[i].timer <= 0) {
        this.bombExplode(this.bombArr[i]);
        if (this.bombArr[i].playerExplode()) {
          clearInterval(this.intervalId);
          this.gameOverScreen();
        }
        this.bombArr.splice(i, 1);
      } else {
        this.bombArr[i].timer--;

        this.bombArr[i].drawBomb();
      }
    }
  };

  gameOverScreen() {
    this.overimg.src = "docs/assets/images/background.jpeg";
    this.ctx.drawImage(this.overimg, 0, 0, 50, 300);
    this.ctx.fillStyle = "white";
    this.ctx.font = "50px monospace";
    this.ctx.fillText(`${this.player.name} wins`, 50, 300);
  }

  bombExplode(bomb) {
    //up
    if (this.tileMap.map[bomb.y - 1][bomb.x] === 3) {
      this.tileMap.map[bomb.y - 1][bomb.x] = 2;
      //down
    }
    if (this.tileMap.map[bomb.y + 1][bomb.x] === 3) {
      this.tileMap.map[bomb.y + 1][bomb.x] = 2;
      //left
    }
    if (this.tileMap.map[bomb.y][bomb.x - 1] === 3) {
      this.tileMap.map[bomb.y][bomb.x - 1] = 2;
      //right
    }
    if (this.tileMap.map[bomb.y][bomb.x + 1] === 3) {
      this.tileMap.map[bomb.y][bomb.x + 1] = 2;
    }
  }
}

const song = new Audio("/docs/assets/sounds/bomba.mp3");
song.loop = false;
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    song.play();
    setTimeout(() => {
      document.getElementById("div-intro").style.display = "none";
      document.getElementById("div-game").style.display = "flex";
      startGame();
    }, 3000);
  };

  function startGame() {
    let game = new Game();
    game.start();
  }
};

// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("start-button");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };
