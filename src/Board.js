import React from 'react'
import './index.css'
import {King, Queen, Bishop, Knight, Rook, Pawn} from './Piece.js'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = Array(64).fill(null)
        this.placePieces()
    }

    placePieces() {
        this.state[60] = new King(true)
        this.state[59] = new Queen(true)
        this.state[58] = new Bishop(true)
        this.state[61] = new Bishop(true)
        this.state[57] = new Knight(true)
        this.state[62] = new Knight(true)
        this.state[56] = new Rook(true)
        this.state[63] = new Rook(true)
        for (var i = 48; i < 56; i++) {
            this.state[i] = new Pawn(true)
        }
        this.state[4] = new King(false)
        this.state[3] = new Queen(false)
        this.state[2] = new Bishop(false)
        this.state[5] = new Bishop(false)
        this.state[1] = new Knight(false)
        this.state[6] = new Knight(false)
        this.state[0] = new Rook(false)
        this.state[7] = new Rook(false)
        for (var i = 8; i < 16; i++) {
            this.state[i] = new Pawn(false)
        }
    }

    renderSquare(color, image) {
        return (
        <Square 
            color = {color}
            image = {image}
        />
        )
    }

    render() {
        var squares = []
        var color = "white-square"
        var change = false
        for (let i = 0; i < 64; i++) {
            change = i % 8 === 0 || i === 0
            color = change ? color : color === "white-square" ? "black-square" : "white-square"
            const newSquare = this.renderSquare(color, (this.state[i]? this.state[i].image : null))
            squares.push(newSquare)
            change = false
        }
        return (
            <div className="board">
                {squares}
            </div>
        )
    }
}

function Square(props) {
    return (
        <button 
            className={props.color}
            onClick={props.onClick}
        ><img src={props.image} />
        </button>
    );
}