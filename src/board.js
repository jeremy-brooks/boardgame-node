var Square = require('../src/square.js').Square;

var board = null;

exports.Board = function(player){
    board = [[],[],[],[],[],[],[],[]];
    //set up board
    var rowCount = 0;
    var hasMine = false;
    var square = null;
    for (var colIndex = 0, col = null; col = board[colIndex]; colIndex++){
        while (rowCount < 8){
            hasMine = !!Math.round(Math.random());
            // if on the first square then put player there and override hasMine value
            if (rowCount === 0 && colIndex === 0){
                square = new Square(false, player);
            } else {
                square = new Square(hasMine);
            }
            col[rowCount] = square;
            rowCount++;
        }
        rowCount = 0;
    }
    return board;
};