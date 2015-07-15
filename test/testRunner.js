var assert = require('assert');
var game = require('../src/game.js');

var expectedRow = NaN;
var expectedCol = NaN;

function setUp() {
    game.reset();
    expectedCol = 0;
    expectedRow = 0;
}
function tearDown() {
    expectedCol = NaN;
    expectedRow = NaN;
}


setUp()
game.displayBoard();
assert.equal(game.getBoardWidth(), 8);
assert.equal(game.getBoardHeight(), 8);
tearDown();

// player
setUp();
assert.equal(game.getPlayer().row, expectedRow, "Player is in row 0 by default");
assert.equal(game.getPlayer().col, expectedCol, "Player is in col 0 by default");
assert.equal(game.getPlayer().lives, 2, "Player has 2 lives by default");
tearDown();

// position
setUp();
assert.equal(game.getPlayerPosition().row, expectedRow, "Player should be in row 0 by default");
assert.equal(game.getPlayerPosition().col, expectedCol, "Player should be in col 0 by default");
tearDown();

// moving up
setUp();
game.moveUp();
assert.equal(game.getPlayerPosition().row, expectedRow + 1, "Moving player up increments their row by 1");
game.displayBoard();
tearDown();

// moving right
setUp();
game.moveRight();
assert.equal(game.getPlayerPosition().col, expectedCol + 1, "Moving player right increments thier col by 1");
game.displayBoard();
tearDown();

// moving left
setUp();
game.moveRight();
assert.equal(game.getPlayerPosition().col, expectedCol + 1, "Moving player right increments thier col by 1");
game.moveLeft();
assert.equal(game.getPlayerPosition().col, expectedCol, "Moving the player left decrements thier col by 1");
game.displayBoard();
tearDown();

// moving down
setUp();
game.moveUp();
assert.equal(game.getPlayerPosition().row, expectedRow + 1, "Moving player up increments their row by 1");
game.moveDown();
assert.equal(game.getPlayerPosition().row, expectedRow, "Moving player up decrements their row by 1");
game.displayBoard();
tearDown();

// land mines
setUp();
assert.equal(game.getActiveMines() > 0, true, "Game board contains some mines by default");
tearDown();

// game status
setUp();
var gameStatus = game.getStatus();
assert.equal(gameStatus.player.col, 0, "Player is in first column");
assert.equal(gameStatus.player.row, 0, "Player is in first row");
assert.equal(gameStatus.player.lives, 2, "Player has 2 lives left");
assert.equal(gameStatus.isGameWon, false, "Game has not been won");
assert.equal(gameStatus.activeMines, game.getActiveMines(), "There are mines left");
tearDown();


