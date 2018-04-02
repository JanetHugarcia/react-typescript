import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import  Game  from "./components/Tictactoe";

/*ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  