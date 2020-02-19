import React from "react";
import { Spring } from "react-spring/renderprops";
import PillsBox from "./PillsBox";
import { vhToPixel, vwToPixel } from "./utils/tricks";

function App() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -1000 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1000 }}
    >
      {props => (
        <div
          className="App"
          style={{
            width: vwToPixel(100),
            height: vhToPixel(100),
            textAlign: "center",
            ...props
          }}
        >
          <h1>This is a react-spring demo</h1>

          <PillsBox />
        </div>
      )}
    </Spring>
  );
}

export default App;
