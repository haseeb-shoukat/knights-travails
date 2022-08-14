import { Node } from "./Node.js";
import { GameBoard } from "./GameBoard.js";

const Knight = function () {
  return {
    gameBoard: new GameBoard(),
    alreadyTraveled: [],
    root: null,

    knightMoves: function (start, end) {
      this.alreadyTraveled = [];
      this.root = this.buildTree(start, end);
      let node = this.shortestPath(this.root, end);
      let path = [];
      while (node) {
        path.push(node.value);
        node = node.parent;
      }
      path.reverse();
      return `You made it in ${
        path.length - 1
      } moves! Here's your path: \n ${JSON.stringify(path)}`;
    },

    shortestPath: function (start, end) {
      let queue = [start];
      while (queue[0]) {
        let x = queue.pop();
        if (JSON.stringify(x.value) === JSON.stringify(end)) return x;
        x.nextNodes.map((node) => (node.parent = x));
        queue.push(...x.nextNodes);
      }
    },

    buildTree: function (start, end) {
      const node = new Node(start);
      if (JSON.stringify(start) === JSON.stringify(end)) return node;
      let possibleMoves = this.nextPossibleMoves(start);
      if (possibleMoves.length === 0) return node;
      possibleMoves.forEach((item) => {
        let nextNode = this.buildTree(item, end);
        node.nextNodes.push(nextNode);
      });
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
        (item) => this.notAlreadyTraveled(item) && this.inPossibleMoves(item)
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
      return this.gameBoard.possibleMoves.some(
        (coords) => JSON.stringify(item) === JSON.stringify(coords)
      );
    },
  };
};

export { Knight };
