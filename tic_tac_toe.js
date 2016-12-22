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
  
}
