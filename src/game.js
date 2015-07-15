var board = null;

// player
function Player() {
    this.row = 0;
    this.col = 0;
    this.lives = 2;
}

exports.reset = function(){
    board = [[],[],[],[],[],[],[],[]];
    //set up board
    var rowCount = 0;
    var hasMine = false;
    for (var colIndex = 0, col = null; col = board[colIndex]; colIndex++){
        while (rowCount < 8){
            hasMine = !!Math.round(Math.random());
            if (hasMine){
                col[rowCount] = "[X]";
            } else {
                col[rowCount] = "[ ]";
            }
            rowCount++;
        }
        rowCount = 0;
    }
    player = new Player();
    // place player by default
    board[player.col][player.row] = player;
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

exports.getPlayerPosition = function () {
    var playerIndex = NaN;
    var position = {
        row: NaN,
        col: NaN
    }
    for (var colIndex = 0, col; col = board[colIndex]; colIndex++){
        playerIndex = col.indexOf(player);
        if (playerIndex !== -1){
            position.row = playerIndex;
            position.col = colIndex;
        }
    }
    return position;
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
            if (row === "[X]") activeMineCount += 1;
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