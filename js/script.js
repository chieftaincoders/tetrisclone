var game = new Phaser.Game(
  480,
  624,
  Phaser.AUTO,
  '',
  { preload: preload, create: create, update: update }
);

var block;
var activeSquares = [];
var cursor;
var elapsed = 0;

var BLOCK_WIDTH = 48;

var blocks = [
  'i-block',
  'o-block',
  't-block',
  'l-block',
  'j-block',
  's-block',
  'z-block'
]

function preload() {

  // Load our blocks
  game.load.image('i-block', '/img/iblock.png');
  game.load.image('o-block', '/img/oblock.png');
  game.load.image('t-block', '/img/tblock.png');
  game.load.image('l-block', '/img/lblock.png');
  game.load.image('j-block', '/img/jblock.png');
  game.load.image('s-block', '/img/sblock.png');
  game.load.image('z-block', '/img/zblock.png');
}

function create() {

  // Add a random tetris sprite to the game
  block = makeBlock();

  // Assign controls to it
  cursors = game.input.keyboard.createCursorKeys();
  rotate = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update() {

  // Add the time since last update to our elapsed variable
  elapsed += game.time.elapsed;

  if (elapsed > 500) {
    // Move block if left arrow key is down
    if (cursors.left.isDown) {
      block.x -= BLOCK_WIDTH;
    }

    if (cursors.right.isDown) {
      block.x += BLOCK_WIDTH;
    }

    if (rotate.isDown) {
      block.angle += 90;
    }

    block.y += BLOCK_WIDTH;

    elapsed = 0;
  }

  if (block.bottom > 600) {

    //block.destroy();
    block = makeBlock();
  }

}

// This function makes blocks for us
var makeBlock = function() {

  // Actually creates block
  var block = game.add.sprite(
    game.world.centerX,
    0,
    blocks[Math.floor(Math.random() * blocks.length)]
  );
  block.anchor.set(0.5, 0.5);
  block.x += (block.width / 2);

  switch(block.key) {

    case "i-block":

      for(var i = 0; i < activeSquares.length; i ++) {

        activeSquares[i] = {};
        activeSquares[i].x = block.x;
        activeSquares[i].y = block.bottom - (BLOCK_WIDTH / 2 + i * BLOCK_WIDTH);

      }
      break;

    case "o-block":

      (for var i = 0; i < activeSquares.length; i ++) {

        activeSquares[i] = {};
        if (i % 2 === 0) {

          // Left hand side of square
          activeSquares[i].x = block.x - (BLOCK_WIDTH / 2);

        } else {

          // Right hand side of square
          activeSquares[i].x = block.x + (BLOCK_WIDTH / 2);

        }

      }
      break;

    case "t-block":

    default:
      break;

  }

  return block;

}
