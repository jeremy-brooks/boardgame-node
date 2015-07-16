var assert = require('assert');
var game = require('../src/game.js');

var expectedRow = NaN;
var expectedCol = NaN;
var square = null;
var gameStatus = null;

function setUp() {
    game.reset();
    expectedCol = 0;
    expectedRow = 0;
}
function tearDown() {
    expectedCol = NaN;
    expectedRow = NaN;
    square = null;
    gameStatus = null;
}

console.log("test the board dimensions");
setUp();
assert.equal(game.getBoardWidth(), 8);
assert.equal(game.getBoardHeight(), 8);
tearDown();

console.log("test the player");
setUp();
assert.equal(game.getPlayer().row, expectedRow, "Player is in row 0 by default");
assert.equal(game.getPlayer().col, expectedCol, "Player is in col 0 by default");
assert.equal(game.getPlayer().lives, 2, "Player has 2 lives by default");
tearDown();

console.log("test moving up");
setUp();
game.moveUp();
assert.equal(game.getPlayer().row, expectedRow + 1, "Moving player up increments their row by 1");
tearDown();

console.log("test moving right");
setUp();
game.moveRight();
assert.equal(game.getPlayer().col, expectedCol + 1, "Moving player right increments thier col by 1");
tearDown();

console.log("test moving left");
setUp();
game.moveRight();
assert.equal(game.getPlayer().col, expectedCol + 1, "Moving player right increments thier col by 1");
game.moveLeft();
assert.equal(game.getPlayer().col, expectedCol, "Moving the player left decrements thier col by 1");
tearDown();

console.log("test moving up");
setUp();
game.moveUp();
assert.equal(game.getPlayer().row, expectedRow + 1, "Moving player up increments their row by 1");
game.moveDown();
assert.equal(game.getPlayer().row, expectedRow, "Moving player up decrements their row by 1");
tearDown();

console.log("test land mines at start of game");
setUp();
assert.equal(game.getActiveMines() > 0, true, "Game board contains some mines by default");
tearDown();

console.log("test game status at start of game");
setUp();
gameStatus = game.getStatus();
assert.equal(gameStatus.player.col, 0, "Player is in first column");
assert.equal(gameStatus.player.row, 0, "Player is in first row");
assert.equal(gameStatus.player.lives, 2, "Player has 2 lives left");
assert.equal(gameStatus.isGameWon, false, "Game has not been won");
assert.equal(gameStatus.activeMines, game.getActiveMines(), "There are mines left");
tearDown();

console.log("test a board square at start of game");
setUp();
square = game.getSquareAt({ row: 0, col: 0});
assert.equal(square.player, game.getPlayer(), "First square contains the player");
assert.equal(square.graphic, "[P]", "First square has a player graphic");
assert.equal(square.hasMine, false, "First square never contains a mine");
assert.equal(square.hasHit, false, "First square never has a mine so never records a hit");
tearDown();

console.log("test that starting a game resets player and board");
setUp();
game.moveUp();
assert.equal(game.getPlayer().row, expectedRow + 1, "Moving player up increments their row by 1");
game.moveDown();
assert.equal(game.getPlayer().row, expectedRow, "Moving player up decrements their row by 1");
game.start();
gameStatus = game.getStatus();
assert.equal(gameStatus.player.col, 0, "Player is in first column");
assert.equal(gameStatus.player.row, 0, "Player is in first row");
assert.equal(gameStatus.player.lives, 2, "Player has 2 lives left");
assert.equal(gameStatus.isGameWon, false, "Game has not been won");
assert.equal(gameStatus.activeMines, game.getActiveMines(), "There are mines left");
tearDown();


