const GameBoard = function () {
  let possibleMoves = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      possibleMoves.push([i, j]);
    }
  }

  return {
    possibleMoves,
  };
};

export { GameBoard };
