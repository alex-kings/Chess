class Board{
    constructor(size, id){
        this.id = document.getElementById(id)
        this.id.style.width = size + "px";
        this.size = size;
        this.squares = this.getSquares();
        this.setStyle();
        console.log(squares);
    }

    setStyle(){
        this.id.style['display']='grid';
        this.id.style['grid-gap']='0';
        this.id.style['grid-template-rows']=`repeat(8,${this.size/8}px)`
        this.id.style['grid-template-columns']=`repeat(8,${this.size/8}px)`
    }

    // Generates the squares for this board
    getSquares() {
        const squares = [];
        for(let i = 0; i<8; i++){
            for(let j = 0; j<8; j++){
                squares.push(new Square([i,j],this))
            }
        }
        return squares;
    }

    
}

class Square{
    constructor(pos, board){
        this.pos = pos;
        this.positionSquare(board);
    }

    positionSquare(board){
        this.id = document.createElement('div');
        const len = board.size/8;
        this.id.style['width'] = len + 'px';
        this.id.style['height'] = len + 'px';
        this.id.style['transform'] = `translate(${this.pos[0]*len}px,${this.pos[1]*len}px)`
        this.id.classList.add('square');
        this.id.innerHTML = "HELLO"
        board.id.appendChild(this.id);
    }
}

export {Board};