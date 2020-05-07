import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Tile from "./entities/tile";
import AdSense from 'react-adsense';
export default class App extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 1280, height: 720, backgroundColor: "#BEE7B8", margin:"auto"}}
        systems={[]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          tile1: { x: 200,  y: 200, renderer: <Tile />}
        }}>
      </GameEngine>
      
    );
  }
}

