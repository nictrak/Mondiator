const sys = (entities, { input }) => {
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
   
    if (payload) {
      //-- Do something here
      const type = payload.target.getAttribute("data-type")
      if(type == "marker"){
          const x = parseInt(payload.target.getAttribute("data-x"), 10)
          const y = parseInt(payload.target.getAttribute("data-y"), 10)
          const path = JSON.parse(payload.target.getAttribute("data-path"))
          const player = entities["player0"];
          const paths = entities["paths"];
          const newGridPosition = {
              x: x,
              y: y
          }
          player.gridPosition = newGridPosition
          paths.startPosition = player.gridPosition
      }
    }
   
    return entities;
};

export default sys