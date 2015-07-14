var assert = require('assert');
var game = require('../src/game.js');

var expectedRow = NaN;
var expectedCol = NaN;

function setUp(){
    game.reset();
    expectedCol = 0;
    expectedRow = 0;
}
function tearDown(){
    expectedCol = NaN;
    expectedRow = NaN;
}

// wrap whole lot in try catch to better get error detail
try {
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
    assert.equal(game.getPlayerPosition().row, expectedRow+1, "Moving player up increments their row by 1");
    game.displayBoard();
    tearDown();

    // moving right
    setUp();
    game.moveRight();
    assert.equal(game.getPlayerPosition().col, expectedCol+1, "Moving player right increments thier col by 1");
    game.displayBoard();
    tearDown();

} catch (e) {
    console.log(e);
    // throw again so build can fail on this
    throw e;
}

