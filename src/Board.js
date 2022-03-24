class Board{
    constructor(size, id){
        this.id = document.getElementById(id)
        this.setSize(size);
        this.size = size;
    }

    setSize(size){
        this.id.style.width = size + "px";
    }
}

export {Board};