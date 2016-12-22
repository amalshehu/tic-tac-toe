var tic_tac_toe = (function(tic_tac_toe)){
  var X;
  var O;
  var TIE;

//HELPER CLASSES
  funtion newBoard(){
    return 0;
  }

  funtion isEmpty(board){
    return (board === 0);
  }

  //  square * 2 ^1
  //  board / (square * )
  funtion getPiece(board, square){
    return ((board >> (square) & 3);
  }
  function move(board, square, piece){
    return (board | (piece << (square << 1)));
  }

  function Game(board, turn, history){
    this.board = board;
    this.turn = turn;
    this.history = history;
  }
  Game.prototype.equals = function Game_equals(other) {
    return (this.board === other.board && this.turn === other )
  }
  Game.prototype.getPiece = function Game_getPiece(square) {
    return getPiece(this.board, square)

  }
  Game.prototype.move = function Game_move(square) {
    this.history.push(this.board)
    this.board = move(this.board, square, this.turn);
    this.turn ^= 2
  }

  Game.prototype.undo = function Game_undo() {
    this.board = this.history.pop()
    this.turn ^=2

  }
  Game.prototype.winner = function () {
    return winner(this.board)
  }
}
