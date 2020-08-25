import React from 'react'
import './index.css'
import {King, Queen, Bishop, Knight, Rook, Pawn} from './Piece.js'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(64).fill(null),
            playerWhite: true,
            startSquare: -1
        }
        this.placePieces()
    }

    placePieces() {
        this.state.squares[60] = new King(true)
        this.state.squares[59] = new Queen(true)
        this.state.squares[58] = new Bishop(true)
        this.state.squares[61] = new Bishop(true)
        this.state.squares[57] = new Knight(true)
        this.state.squares[62] = new Knight(true)
        this.state.squares[56] = new Rook(true)
        this.state.squares[63] = new Rook(true)
        for (var i = 48; i < 56; i++) {
            this.state.squares[i] = new Pawn(true)
        }
        this.state.squares[4] = new King(false)
        this.state.squares[3] = new Queen(false)
        this.state.squares[2] = new Bishop(false)
        this.state.squares[5] = new Bishop(false)
        this.state.squares[1] = new Knight(false)
        this.state.squares[6] = new Knight(false)
        this.state.squares[0] = new Rook(false)
        this.state.squares[7] = new Rook(false)
        for (i = 8; i < 16; i++) {
            this.state.squares[i] = new Pawn(false)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] && squares[i].isWhite === this.state.playerWhite) {
            this.setState({
                startSquare: i
            })
            return;
        }
        if (this.state.startSquare > -1 && !squares[i]) {
            if (squares[this.state.startSquare].isMovePossible(this.state.startSquare, i, false)) {
                squares[i] = squares[this.state.startSquare]
                squares[this.state.startSquare] = null
                this.setState({
                    squares: squares,
                    startSquare: -1,
                    playerWhite: !this.state.playerWhite
                })
            }
            return;
        }
    }

    renderSquare(color, image, i) {
        return (
        <Square 
            color = {color}
            image = {image}
            index = {i}
            onClick={() => this.handleClick(i)}
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
            const newSquare = this.renderSquare(color, (this.state.squares[i]? this.state.squares[i].image : null), i)
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
            id = {props.index}
        ><img src={props.image} />
        </button>
    );
}