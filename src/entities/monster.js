import React from "react"
import {gridToAbsolute, boardPosition, tileSize, absoluteToRenderPosition} from "../gameLogic"


const requireSprite = (name) => require("../sprite/"+name+".png")

const Monster = props => {
    const gridPosition = props.gridPosition
    const name = props.name
    const position = gridToAbsolute(gridPosition, boardPosition())
    const sprite = requireSprite(name)
    const size = tileSize()
    const renderPosition = absoluteToRenderPosition(position, size)
    return (
        <img src={sprite} style={{ position: "absolute", width: size.x, height: size.y, left: renderPosition.x, top: renderPosition.y}}/>        
    )
}

export default Monster