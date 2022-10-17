class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.wall = this.image("wall.png");
    this.box = this.image("box.png");
  }

  image(fileName) {
    const img = new Image();
    img.src = `/docs/assets/images/${fileName}`;
    return img;
  }

  //13 rows and 13 columns
  /*
  0- empty
  1- wall
  2- player 1
  3- box
  4- player 2

  */
  map = [
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
    [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1],
    [1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  draw(canvas, ctx) {
    this.setCanvasSize(canvas);
    this.clearCanvas(canvas, ctx);
    this.drawMap(ctx);
  }

  drawMap(ctx) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column];
        let image = null;
        switch (tile) {
          case 1:
            image = this.wall;
            break;
          case 2:
            image = this.player1;
            break;
          case 3:
            image = this.box;
            break;
        }
        if (image != null)
          ctx.drawImage(
            image,
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );
      }
    }
  }

  clearCanvas(canvas, ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  setCanvasSize(canvas) {
    canvas.height = this.map.length * this.tileSize;
    canvas.width = this.map[0].length * this.tileSize;
  }
}

