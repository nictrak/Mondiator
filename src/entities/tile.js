import React from "react"

const Tile = (props) => {
    const size = 64;
    const x = props.x - size / 2;
    const y = props.y - size / 2;
    return (
        <img src={require('../sprite/tile.png')} style={{ position: "relative", width: size, height: size, left: x, top: y }}/>
    )
}

export default Tile