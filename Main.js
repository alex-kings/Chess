// Constants
const boardSize = 300;

// Chess game
class Chess{
    constructor(){
        this.info={
            started:false,
            ended:false,
            won:null,
            turn:null,
            timer:5
        }
        this.data={
            board:null,
        }
    }
}

class Board{
    constructor(){
        this.id = document.getElementById("board")
        this.setSize(boardSize);
    }

    setSize(size){
        this.id.style.width = size + "px";
    }
}

const board = new Board();

// Piece
class Piece {
    constructor(whitePiece, initialPos){
        this.whitePiece = whitePiece; // true for white, false for black
        this.pos = initialPos;
    }

    placePiece(id){
        const domImage = document.createElement("img");
        domImage.src = this.getImgUrl();
        let width = boardSize/8;
        domImage.width = width
        document.getElementById(id).appendChild(domImage);
    }
}



class King extends Piece {
    constructor(whitePiece, initialPos){
        super(whitePiece, initialPos)
    }

    getImgUrl(){
        let url = "./Images/"
        url += this.whitePiece?"w":"b";
        return url + "k.png";
    }
}

class Queen extends Piece {
    constructor(whitePiece, initialPos){
        super(whitePiece, initialPos)
    }

    getImgUrl(){
        let url = "./Images/"
        url += this.whitePiece?"w":"b";
        return url + "q.png";
    }
}

class Rook extends Piece {
    constructor(whitePiece, initialPos){
        super(whitePiece, initialPos)
    }

    getImgUrl(){
        let url = "./Images/"
        url += this.whitePiece?"w":"b";
        return url + "r.png";
    }
}

class Bishop extends Piece {
    constructor(whitePiece, initialPos){
        super(whitePiece, initialPos)
    }

    getImgUrl(){
        let url = "./Images/"
        url += this.whitePiece?"w":"b";
        return url + "b.png";
    }
}

class Knight extends Piece {
    constructor(whitePiece, initialPos){
        super(whitePiece, initialPos)
    }

    getImgUrl(){
        let url = "./Images/"
        url += this.whitePiece?"w":"b";
        return url + "n.png";
    }
}

class Pawn extends Piece {
    constructor(whitePiece, initialPos){
        super(whitePiece, initialPos)
    }

    getImgUrl(){
        let url = "./Images/"
        url += this.whitePiece?"w":"b";
        return url + "p.png";
    }
}




const king = new King(true, [0,0]);
king.placePiece("board");