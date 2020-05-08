import React from "react"
import {gridToAbsolute, boardPosition} from "../gameLogic"


const Monster = props => {
    const gridPosition = props.gridPosition
    const position = gridToAbsolute(gridPosition, boardPosition())

    return (
        <div>

        </div>
    )
}

export default Monster