var board = null;
var player = null;

// player
function Player() {
    this.row = 0;
    this.col = 0;
    this.lives = 2;
    this.graphic = "[P]";
}

// square
function Square(hasMine, player) {
    this.player = player || null;
    this.hasMine = hasMine || false;
    this.hasHit = false;
    if (player) {
        this.graphic = player.graphic;
    } else {
        this.graphic = (hasMine) ? "[X]" : "[ ]";
    }
}

exports.reset = function(){
    board = [[],[],[],[],[],[],[],[]];
    //set up board
    var rowCount = 0;
    var hasMine = false;
    var square = null;
    player = new Player();
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
}

exports.getBoardHeight = function () {
    //assume this is a square s return length of first row as all are equal
    return board[0].length;
}

exports.getBoardWidth = function(){
    return board.length;
}

exports.getPlayer = function(){
    return player;
}

exports.displayBoard = function () {
    console.log(board);
}

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
}

exports.moveLeft = function () {
    board[player.col][player.row] = "[-]";
    player.col -= 1;
    board[player.col][player.row] = player;
}

exports.getActiveMines = function () {
    var activeMineCount = 0;
    for (var ci = 0, col; col = board[ci]; ci++){
        for (var ri = 0, row; row = col[ri]; ri++){
            if (row.hasMine) activeMineCount += 1;
        }
    }
    return activeMineCount;
}

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
    var square = board[coordinates.col][coordinates.row];
    return square;
};