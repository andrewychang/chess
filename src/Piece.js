export default class Piece {
    constructor(isWhite, image) {
        this.isWhite = isWhite
        this.image = image
    }
}

export class King extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
    }
}

export class Queen extends Piece {
    constructor(isWhite){
        super(isWhite, "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg");
    }
}

export class Bishop extends Piece {
    constructor(isWhite){
        super(isWhite, "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_blt45.svg");
    }
}

export class Rook extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }
}

export class Pawn extends Piece {
    constructor(isWhite){
        super(isWhite, "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_plt45.svg");
    }
}