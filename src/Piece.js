// Piece

const baseUrl = "./Images/"
class Piece {
    constructor(whitePiece, initialPos, board){
        this.whitePiece = whitePiece; // true for white, false for black
        this.pos = initialPos;
        this.board = board;
        this.getInitialPosition()
    }

    // Positions the piece on the board at its initial square. Returns the piece id.
    getInitialPosition(){
        const domImage = document.createElement("img");
        domImage.src = this.getImgUrl();
        let width = this.board.size/8;
        domImage.width = width;
        domImage.class = "piece";
        this.board.id.appendChild(domImage);
    }
}

class Pawn extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?"w":"b" + "p.png";
    }
}

class Rook extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?"w":"b" + "r.png";
    }
}

class Knight extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?"w":"b" + "n.png";
    }
}

class Bishop extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?"w":"b" + "b.png";
    }
}

class King extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        let url = baseUrl;
        url += this.whitePiece?"w":"b";
        return (url+ "k.png");
    }
}

class Queen extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?"w":"b" + "q.png";
    }
}


export {King,Queen,Rook,Bishop,Knight,Pawn};