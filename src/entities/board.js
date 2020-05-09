import React from "react"
import { gridToAbsolute, index2D, boardPosition, tileSize, absoluteToRenderPosition } from "../gameLogic"
import { render } from "@testing-library/react"


const Tile = (props) => {
    const size = tileSize();
    const renderPosition = absoluteToRenderPosition(props.position, size)
    return (
        <img src={require('../sprite/tile.png')} style={{ position: "absolute", width: size.x, height: size.y, left: renderPosition.x, top: renderPosition.y}}/>
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
    const position = boardPosition()
    return(
        <div>
            {renderBoard(position)}
        </div>
    )
}

export default Board