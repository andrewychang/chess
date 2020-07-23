import React from 'react'
import './index.css'
import {King} from './Piece.js'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = Array(64).fill(null)
        this.placePieces()
    }

    placePieces() {
        this.state[60] = new King(true)
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