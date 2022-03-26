import { Board } from "./Board.js";
import { King,Queen,Rook,Bishop,Knight,Pawn } from "./Piece.js";
// Constants
const boardSize = 400;
const board = new Board(boardSize, "board");
const king = new King(true, [0,0], board);
king.move(2,2);

console.log(king.id.style);

const test = document.getElementById('test');
test.addEventListener("click",()=>{king.move(3,3)})
