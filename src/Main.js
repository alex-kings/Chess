import { Board } from "./Board.js";
import { King,Queen,Rook,Bishop,Knight,Pawn } from "./Piece.js";
// Constants
const boardSize = 400;
const board = new Board(boardSize, "board");
const king = new King(true, [0,0], board);

