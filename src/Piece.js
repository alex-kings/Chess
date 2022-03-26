const baseUrl = `./Images/`; // Path to the images folder.
const transitionTime = `200ms`;

class Piece {
    constructor(whitePiece, initialPos, board){
        this.whitePiece = whitePiece; // true for white, false for black
        this.pos = initialPos;
        this.board = board;
        this.size = this.board.size/8;
        this.id = this.getInitialPosition();
        this.id.style['transition'] = transitionTime + ' ease-out';
        this.id.style['z-index'] = '1000';
        this.clicked = false;
        this.getEventListeners();
    }

    // Positions the piece on the board at its initial square. Returns the piece id.
    getInitialPosition(){
        const img = document.createElement("img");
        img.src = this.getImgUrl();
        let width = this.size;
        img.width = width;
        img.classList.add(`piece`);
        this.board.id.appendChild(img);
        return img;
    }

    getEventListeners(){
        this.id.addEventListener('click', ()=>{
            this.clicked = true;
        })
    }

    // Moves the piece
    move(x,y){
        const xf = (x-this.pos[0])*this.size;
        const yf = (y-this.pos[1])*this.size;
        this.id.style['transform'] = `translate(${xf}px,${yf}px)`;
    }


}



class Pawn extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?'w':'b' + "p.png";
    }
}

class Rook extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?'w':'b' + "r.png";
    }
}

class Knight extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?'w':'b' + "n.png";
    }
}

class Bishop extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?'w':'b' + "b.png";
    }
}

class King extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        let url = baseUrl;
        url += this.whitePiece?'w':'b';
        return (url+ "k.png");
    }
}

class Queen extends Piece {
    constructor(whitePiece, initialPos, board){
        super(whitePiece, initialPos, board)
    }

    getImgUrl(){
        return super.baseUrl + this.whitePiece?'w':'b' + "q.png";
    }
}


export {King,Queen,Rook,Bishop,Knight,Pawn};