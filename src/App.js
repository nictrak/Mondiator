import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Board from "./entities/board"
import Monster from "./entities/monster"
import {boardPosition} from "./gameLogic"
import Paths from "./entities/paths"
import sys from "./systems/sys"
export default class App extends PureComponent {
  render() {
    return (
      <div style={{position: "absolute", left: "50%"}}>
        <GameEngine
          style={{ width: 1280, height: 720, backgroundColor: "#BEE7B8", position: "relative", left: "-50%"}}
          systems={[sys]}
          entities={{
            //-- Notice that each entity has a unique id (required)
            //-- and a renderer property (optional). If no renderer
            //-- is supplied with the entity - it won't get displayed.
            board: {renderer: <Board />},
            player0: {gridPosition: {x: 0, y: 7}, name: "prototype", isActive: true, renderer: <Monster />},
            player1: {gridPosition: {x: 7, y: 0}, name: "prototype", isActive: false, renderer: <Monster />},
            paths: {startPosition: {x: 0, y: 7}, moveSpeed: 3, renderer: <Paths />}
          }}>
        </GameEngine>
      </div>
      
    );
  }
}

