import React from "react"
import {gridToAbsolute, boardPosition, addPosition, Vector2D, nullPosition, isInBoard, isEqual2D, gridToRenderPosition, tileSize} from "../gameLogic"

// Direction Vector
const nDirection = Vector2D(0, -1)
const sDirection = Vector2D(0, 1)
const eDirection = Vector2D(1, 0)
const wDirection = Vector2D(-1, 0)

//Grid Position from based gridPosition
const nGrid = (gridPosition) => addPosition(gridPosition, nDirection)
const sGrid = (gridPosition) => addPosition(gridPosition, sDirection)
const eGrid = (gridPosition) => addPosition(gridPosition, eDirection)
const wGrid = (gridPosition) => addPosition(gridPosition, wDirection)

const nObject = (previousPosition, previousCount) => ({
    position: nGrid(previousPosition),
    previous: previousPosition,
    count: previousCount - 1
})
const sObject = (previousPosition, previousCount) => ({
    position: sGrid(previousPosition),
    previous: previousPosition,
    count: previousCount - 1
})
const eObject = (previousPosition, previousCount) => ({
    position: eGrid(previousPosition),
    previous: previousPosition,
    count: previousCount - 1
})
const wObject = (previousPosition, previousCount) => ({
    position: wGrid(previousPosition),
    previous: previousPosition,
    count: previousCount - 1
})

const calAllPath = (gridPosition, moveSpeed) => {
    const bfs = (queue, res, start) => {
        if(queue.length == 0) return res
        const first = queue[0]
        const position = first.position
        const previous = first.previous
        const count = first.count
        if((!isInBoard(position)) || count < 0 || res.find(grid => isEqual2D(position, grid.position))!=undefined) return bfs(Object.freeze(queue.slice(1)), res, start)
        const new_queue = Object.freeze([...queue.slice(1), nObject(position, count), sObject(position, count), eObject(position, count), wObject(position, count)])
        if(!isEqual2D(position, start)) {
            const new_res = Object.freeze([...res, {position: position, previous: previous}])
            return bfs(new_queue, new_res, start)
        }
        return bfs(new_queue, res, start)
    }
    const queue = Object.freeze([{
        position: gridPosition,
        previous: nullPosition,
        count: moveSpeed
    }])
    const res = Object.freeze([])
    return bfs(queue, res, gridPosition)
}

const calPath = (destination, allPath, startPosition) => {
    const doCal = (current, res) => {
        const grid = allPath.find(grid => grid.position==current)
        if(grid == undefined) return Object.freeze([])
        if(isEqual2D(grid.previous, startPosition)) return Object.freeze([grid.position, ...res])
        return doCal(grid.previous, Object.freeze([grid.position, ...res]))
    }
    const res = doCal(destination, Object.freeze([]))
    return res
}

const Marker = (props) => {
    const size = tileSize()
    const renderPosition = gridToRenderPosition(props.gridPosition, size)
    const path = calPath(props.gridPosition, props.paths, props.startPosition)
    return (
        <img src={require('../sprite/marker.png')} style={{ position: "absolute", width: size.x, height: size.y, left: renderPosition.x, top: renderPosition.y}} 
        data-type={"marker"} 
        data-x={props.gridPosition.x} 
        data-y={props.gridPosition.y}
        data-path={JSON.stringify(path)}/>
    )
}

const Paths = (props) => {
    const startPosition = props.startPosition
    const moveSpeed = props.moveSpeed
    const allPath = calAllPath(startPosition, moveSpeed)
    return (
        <div>
            {allPath.map(grid => <Marker gridPosition={grid.position} paths={allPath} startPosition={startPosition}/>)}
        </div>
    )
}

export default Paths