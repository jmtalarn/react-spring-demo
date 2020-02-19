import React from "react";
// import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";
import { vhToPixel, vwToPixel } from "./utils/tricks";

const Pill = ({ children, index, total, color, pillOpened, handlerClick }) => {
  const initialWidth = vwToPixel(100 / total);
  const initialLeft = vwToPixel((index * 100) / total);
  console.log({ index, total, initialWidth, initialLeft, color });
  const defaultStyle = {
    // padding: "0.5rem",
    backgroundColor: color,
    border: "1px solid grey",
    position: "absolute",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  console.log(`Pill ${children} is ${pillOpened ? "open" : "closed"}`);

  const contentProps = useSpring({
    //height: pillOpened ? "5rem" : "2rem",
    height: pillOpened ? vhToPixel(100) : "28px",
    width: pillOpened ? vwToPixel(100) : initialWidth,
    // position: pillOpened ? "absolute" : "relative",
    borderRadius: pillOpened ? "0px" : "10px",
    top: pillOpened ? "0px" : vhToPixel(95),
    left: pillOpened ? "0px" : initialLeft,

    zIndex: pillOpened ? "0" : "1",
    ...defaultStyle
  });
  return (
    <animated.div onClick={() => handlerClick()} style={contentProps}>
      {children}
    </animated.div>
  );
};
const PillsBox = () => {
  const numberOfPills = [
    { title: "Pill A", color: "#F79256" },
    { title: "Pill B", color: "#FBD1A2" },
    { title: "Pill C", color: "#7DCFB6" },
    { title: "Pill D", color: "#1D4E89" }
  ];
  const [pillOpened, openPill] = React.useState(null);
  return (
    <>
      {numberOfPills.map((item, index) => (
        <Pill
          key={`${item.title}`}
          index={index}
          total={numberOfPills.length}
          color={item.color}
          pillOpened={pillOpened === index}
          handlerClick={() => {
            console.log(`openPill(${index})`);
            openPill(index);
          }}
        >{`${item.title}`}</Pill>
      ))}
    </>
  );
};

export default PillsBox;
