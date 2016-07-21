var game = new Phaser.Game(
  800,
  600,
  Phaser.AUTO,
  '',
  { preload: preload, create: create, update: update }
);

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
  block = game.add.sprite(
    game.world.centerX, // x position
    0,                  // y position
    'o-block'           // keys
  );
}

function update() {
}
