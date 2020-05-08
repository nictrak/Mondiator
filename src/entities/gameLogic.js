export const gridToAbsolute = (gridPostion, boardPosition) => ({
    x: (gridPostion.x-3.5)*68 + boardPosition.x,
    y: (gridPostion.y-3.5)*68 + boardPosition.y
})