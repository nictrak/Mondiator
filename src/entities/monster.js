import React from "react"
import {gridToAbsolute, boardPosition} from "../gameLogic"


const requireSprite = (name) => require("../sprite/"+name+".png")

const Monster = props => {
    const gridPosition = props.gridPosition
    const name = props.name
    const position = gridToAbsolute(gridPosition, boardPosition())
    const sprite = requireSprite(name)
    const size = 64;
    const x = position.x - size / 2;
    const y = position.y - size / 2;
    return (
        <img src={sprite} style={{ position: "absolute", width: size, height: size, left: x, top: y}}/>        
    )
}

export default Monster