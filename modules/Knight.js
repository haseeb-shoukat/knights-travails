import { Node } from "./Node";
import { GameBoard } from "./GameBoard";

const Knight = function (gameBoard) {
  return {
    gameBoard: new GameBoard(),
    alreadyTraveled: [],
    root: null,

    knightMoves: function (start, end) {
      this.alreadyTraveled = [];
      this.root = buildTree(start, end);
    },

    buildTree: function (start, end) {
      const node = new Node(start);
      if (JSON.stringify(start) === JSON.stringify(end)) return node;
      node.nextNodes = [
        ...this.nextPossibleMoves(start).forEach((item) =>
          this.buildTree(item, end)
        ),
      ];
      return node;
    },

    nextPossibleMoves: function ([x, y]) {
      let arr = [
        [x - 1, y + 2],
        [x + 1, y + 2],
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x - 2, y - 1],
        [x - 2, y + 1],
      ];
      arr = arr.filter(
        (item) => item.notAlreadyTraveled() && item.inPossibleMoves()
      );
      this.alreadyTraveled.push(...arr);
      return arr;
    },

    notAlreadyTraveled: function (item) {
      return this.alreadyTraveled.every(
        (coords) => JSON.stringify(item) !== JSON.stringify(coords)
      );
    },

    inPossibleMoves: function (item) {
      return this.possibleMoves.every(
        (coords) => JSON.stringify(item) !== JSON.stringify(coords)
      );
    },
  };
};

export { Knight };
