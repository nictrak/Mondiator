export const gridToAbsolute = (gridPostion) => ({
    x: (gridPostion.x-3.5)*(tileSize().x+4) + boardPosition().x,
    y: (gridPostion.y-3.5)*(tileSize().y+4) + boardPosition().y
})

export const boardPosition = () =>({
    x: 640,
    y: 300
})

export const tileSize = () => ({
    x: 64,
    y: 64
})

export const absoluteToRenderPosition = (absolutePosition, size) => ({
    x: absolutePosition.x - size.x / 2,
    y: absolutePosition.y - size.y / 2
})

export const gridToRenderPosition = (gridPostion, size) => absoluteToRenderPosition(gridToAbsolute(gridPostion), size)


export const index2D = (indexX, indexY) => ({x: indexX, y: indexY})