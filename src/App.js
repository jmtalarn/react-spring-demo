import React from "react";
import { Spring } from "react-spring/renderprops";
import PillsBox from "./PillsBox";

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
            width: "100%",
            height: "100%",
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
