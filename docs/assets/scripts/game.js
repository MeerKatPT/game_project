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
    this.bombArr = [];
    this.tileMap = null;
  }

  start() {
    this.player = new Player(38, 38, 38, 38, this.ctx);
    this.player2 = new Player2(38, 38, 38, 38, this.ctx);
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

  updateBombs = () => {
    for (let i = 0; i < this.bombArr.length; i++) {
      if (this.bombArr[i].timer <= 0) {
        this.bombExplode(this.bombArr[i]);
        this.bombArr[i].playerExplode();
        this.bombArr.splice(i, 1);
      } else {
        this.bombArr[i].timer--;
        this.bombArr[i].drawBomb();
      }
    }
  };

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

function startGame() {
  let game = new Game();
  game.start();
}

startGame();

// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("start-button");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };
