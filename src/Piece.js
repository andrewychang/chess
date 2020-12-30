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

    possibleMove(start, end) {
        switch (start % 8) {
            case 0:
                return (start - 8 === end || start - 7 === end || start + 8 === end || start + 9 === end || start + 1 === end)
            case 7:
                return (start - 8 === end || start - 9 === end || start + 8 === end || start + 7 === end || start - 1 === end)
            default:
                return (start - 8 === end || start - 9 === end || start + 8 === end || start + 7 === end || start - 1 === end || start + 1 === end || start + 9 === end || start - 7 === end)
        }
    }

    getPath(start, end) {
        return []
    }

}

export class Queen extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    }

    possibleMove(start, end, opponentSquare) {
        const rightDiagFactor = 7 - (start % 8)
        for (var i = start - (7 * rightDiagFactor); i <= start + (7 * (8 - rightDiagFactor)); i += 7) {
            if (i === end)
                return true
        }
        const leftDiagFactor = start % 8
        for (i = start - (9 * leftDiagFactor); i <= start + (9 * (8 - leftDiagFactor)); i += 9) {
            if (i === end)
                return true
        }
        return (start % 8 === end % 8 || Math.floor(start / 8) === Math.floor(end / 8))
    }

    getPath(start, end) {
        
    }

}

export class Bishop extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    }

    possibleMove(start, end) {
        const rightDiagFactor = 7 - (start % 8)
        for (var i = start - (7 * rightDiagFactor); i <= start + (7 * (8 - rightDiagFactor)); i += 7) {
            if (i === end) {
                return true
            }
        }
        const leftDiagFactor = start % 8
        for (i = start - (9 * leftDiagFactor); i <= start + (9 * (8 - leftDiagFactor)); i += 9) {
            if (i === end) {
                return true
            }
        }
    }

    getPath(start, end) {
        return []
    }
}

export class Rook extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    }

    possibleMove(start, end) {
        return (start % 8 === end % 8 || Math.floor(start / 8) === Math.floor(end / 8))
    }
}

export class Knight extends Piece {
    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    }

    possibleMove(start, end) {
        switch (start % 8) {
            case 0:
                return (start - 6 === end || start - 15 === end || start + 10 === end || start + 17 === end)
            case 1:
                return (start - 6 === end || start - 15 === end || start + 10 === end || start + 17 === end || start - 17 === end || start + 15 === end)
            case 6:
                return (start - 17 === end || start + 15 === end || start - 10 === end || start + 6 === end || start - 15 === end || start + 17 === end)
            case 7:
                return (start - 17 === end || start + 15 === end || start - 10 === end || start + 6 === end)
            default:
                return (start - 17 === end || start + 15 === end || start - 10 === end || start + 6 === end || start - 15 === end || start + 17 === end || start - 6 === end || start + 10 === end)
        }
    }

    getPath(start, end) {
        return []
    }
}

export class Pawn extends Piece {

    constructor(isWhite){
        super(isWhite, 
            (isWhite ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
        this.whiteStartPositions = [48, 49, 50, 51, 52, 53, 54, 55]
        this.blackStartPositions = [8, 9, 10, 11, 12, 13, 14, 15]
    }

    possibleMove(start, end, opponentSquare) {
        if (this.isWhite) {
            if (!opponentSquare && ((end === start - 8) || (this.whiteStartPositions.includes(start) && end === start - 16))) {
                return true
            }
            else if (opponentSquare && (end === start - 7 || end === start - 9))
                return true
        }
        else if (!opponentSquare && ((end === start + 8) || (this.blackStartPositions.includes(start) && end === start + 16))) {
                return true
            }
        else if (opponentSquare && (end === start + 7 || end === start + 9)) {
                return true
        }
        return false
    }

    getPath(start, end) {
        return []
    }
}