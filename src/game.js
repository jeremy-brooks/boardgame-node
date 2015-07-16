var Player = require('../src/player.js').Player;
var Board = require('../src/board.js').Board;

var player = null;
var board = null;
var isGameWon = false;

exports.start = function (){
    this.reset();
}
exports.reset = function(){
    player = new Player();
    board = new Board(player);
};

exports.getBoardHeight = function () {
    //assume this is a square board so return length of first row
    return board[0].length;
};

exports.getBoardWidth = function(){
    return board.length;
};

exports.getPlayer = function(){
    return player;
};

exports.displayBoard = function () {
    console.log(board);
};

exports.move = function (key) {
    /*
        TODO: handle mine hits
     */
    board[player.col][player.row].removePlayer();
    if (key === "U") {
        player.row += 1;
    } else if (key === "D") {
        player.row -= 1;
    } else if (key === "L") {
        player.col -= 1;
    } else {
        player.col += 1;
    }
    board[player.col][player.row].player = player;
    if (player.row === this.getBoardHeight()-1) {
        isGameWon = true;
    }
};

exports.moveUp = function (){
    this.move("U")
};

exports.moveDown = function (){
    this.move("D");
};

exports.moveRight = function(){
    this.move("R");
};

exports.moveLeft = function () {
    this.move("L");
};

exports.getActiveMines = function () {
    var activeMineCount = 0;
    for (var ci = 0, col; col = board[ci]; ci++){
        for (var ri = 0, row; row = col[ri]; ri++){
            if (row.hasMine) activeMineCount += 1;
        }
    }
    return activeMineCount;
};

exports.getStatus = function () {
    var status = {
        player: this.getPlayer(),
        activeMines: this.getActiveMines(),
        isGameWon: isGameWon
    };
    console.log(status);
    return status;
};

exports.getSquareAt = function (coordinates) {
    return board[coordinates.col][coordinates.row];
};