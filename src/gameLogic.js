export const Vector2D = (x, y) => ({
    x: x,
    y: y
})

export const nullPosition = Vector2D(-1, -1)

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

export const addPosition = (position0, position1) => ({
    x: position0.x + position1.x,
    y: position0.y + position1.y
})

export const isInBoard = (gridPostion) => (gridPostion.x >= 0 && gridPostion.x <= 7 && gridPostion.y >= 0 && gridPostion.y <= 7)

export const isEqual2D = (vector2D0, vector2D1) => (vector2D0.x == vector2D1.x && vector2D0.y == vector2D1.y) 