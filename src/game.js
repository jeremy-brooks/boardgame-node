var Player = require('../src/player.js').Player;
var Board = require('../src/board.js').Board;

var player = null;
var board = null;

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

exports.moveUp = function (){
    board[player.col][player.row] = "[-]";
    player.row += 1;
    board[player.col][player.row] = player;
};

exports.moveDown = function (){
    board[player.col][player.row] = "[-]";
    player.row -= 1;
    board[player.col][player.row] = player;
};

exports.moveRight = function(){
    board[player.col][player.row] = "[-]";
    player.col += 1;
    board[player.col][player.row] = player;
};

exports.moveLeft = function () {
    board[player.col][player.row] = "[-]";
    player.col -= 1;
    board[player.col][player.row] = player;
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
        isGameWon: false
    };
    console.log(status);
    return status;
};

exports.getSquareAt = function (coordinates) {
    return board[coordinates.col][coordinates.row];
};