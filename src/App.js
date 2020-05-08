import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Board from "./entities/board"
export default class App extends PureComponent {
  render() {
    return (
      <div style={{position: "absolute", left: "50%"}}>
        <GameEngine
          style={{ width: 1280, height: 720, backgroundColor: "#BEE7B8", position: "relative", left: "-50%"}}
          systems={[]}
          entities={{
            //-- Notice that each entity has a unique id (required)
            //-- and a renderer property (optional). If no renderer
            //-- is supplied with the entity - it won't get displayed.
            board: { position: {x: 640, y: 300},renderer: <Board />}
          }}>
        </GameEngine>
      </div>
      
    );
  }
}

