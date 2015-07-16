// square
exports.Square = function (hasMine, player) {
    this.player = player || null;
    this.hasMine = hasMine || false;
    this.hasHit = false;
    if (player) {
        this.graphic = player.graphic;
    } else {
        this.graphic = (hasMine) ? "[X]" : "[ ]";
    }
};

this.Square.prototype.removePlayer = function () {
    this.player = null;
    this.graphic = "[-]";
};