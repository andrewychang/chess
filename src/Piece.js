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
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    }
}

export class Bishop extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    }
}

export class Rook extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }
}

export class Knight extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    }
}

export class Pawn extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
    }
}