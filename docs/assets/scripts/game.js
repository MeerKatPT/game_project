// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const tileSize = 38;

// const tileMap = new TileMap(tileSize);
// const player = new Player(38, 38, 35, 35, ctx);

// function gameLoop() {
//   console.log("olaolaoaloa");

//   tileMap.draw(canvas, ctx);
//   player.draw();

// }
// setInterval(gameLoop, 1000 / 60);

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.controls = null;
    this.tileSize = 38;
    this.intervalId = null;
  }

  start() {
    this.player = new Player(38, 38, 38, 38, this.ctx);
    this.player2 = new Player2(38, 38, 38, 38, this.ctx);
    this.tileMap = new TileMap(this.tileSize);
    this.controls = new Controls(this.player);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  update = () => {
    this.tileMap.draw(this.canvas, this.ctx);
    this.player.draw();
    this.player2.draw2player();
  };
}

function startGame() {
  let game = new Game();
  game.start();
}

startGame();
