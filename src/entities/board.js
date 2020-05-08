import React from "react"
import { gridToAbsolute } from "../gameLogic"
import { render } from "@testing-library/react"


const index2D = (indexX, indexY) => ({x: indexX, y: indexY})

const Tile = (props) => {
    const size = 64;
    const x = props.position.x - size / 2;
    const y = props.position.y - size / 2;
    return (
        <img src={require('../sprite/tile.png')} style={{ position: "absolute", width: size, height: size, left: x, top: y}}/>
    )
}

const renderTile = (indexX, indexY, boardPosition) => <Tile position={gridToAbsolute(index2D(indexX, indexY),boardPosition)}/>

const renderRow = (indexY, boardPosition) => {
    return (
        <div>
            {renderTile(0, indexY, boardPosition)}
            {renderTile(1, indexY, boardPosition)}
            {renderTile(2, indexY, boardPosition)}
            {renderTile(3, indexY, boardPosition)}
            {renderTile(4, indexY, boardPosition)}
            {renderTile(5, indexY, boardPosition)}
            {renderTile(6, indexY, boardPosition)}
            {renderTile(7, indexY, boardPosition)}
        </div>
    )
}

const renderBoard = (boardPosition) => {
    return (
        <div>
            {renderRow(0, boardPosition)}
            {renderRow(1, boardPosition)}
            {renderRow(2, boardPosition)}
            {renderRow(3, boardPosition)}
            {renderRow(4, boardPosition)}
            {renderRow(5, boardPosition)}
            {renderRow(6, boardPosition)}
            {renderRow(7, boardPosition)}
        </div>
    )
}


const Board = (props) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
    const position = props.position
    const indexX = 0
    const indexY = 0
    return(
        <div>
            {renderBoard(position)}
        </div>
    )
}

export default Board