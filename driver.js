import { Knight } from "./modules/Knight.js";

const myKnight = Knight();

let path = myKnight.knightMoves([6, 0], [3, 3]);
console.log(path);
